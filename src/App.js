import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { InfoAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';





class App extends Component {
    state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
    showWelcomeScreen: undefined,
  }

  updateEvents = (location, eventCount) => {
    const { numberOfEvents } = this.state;
    if (location === undefined) location = this.state.selectedLocation;
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      eventCount = eventCount === undefined ? numberOfEvents : eventCount;
      this.setState({
        events: locationEvents.slice(0, eventCount),
        selectedLocation: location,
        numberOfEvents: eventCount,
      });
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    let shouldGetEvents;
    if (navigator.onLine) {
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      shouldGetEvents = (code || isTokenValid) && this.mounted;
    } else {
      shouldGetEvents = accessToken && this.mounted;
      this.setState({showWelcomeScreen: false});
    }

    if (shouldGetEvents) {
      getEvents().then((events) => {
        if (this.mounted) {
          events=events.slice(0,this.state.eventCount);
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }



  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen ) {
      return (
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }}
        />
      )
    }
    return (
      <div className="App">
      {!navigator.onLine && (
          <InfoAlert
            className="alert-centered"
            text="App is currently offline. You are seeing your cached data."
          />
        )}
        <h1 className='mt-5 mb-4'>Meet App</h1>
        <h6 className='mt-3 mb-2'>Choose your nearest city</h6>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <h4>Events in each city</h4>

         <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
