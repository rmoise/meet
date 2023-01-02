import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { Card, Col, Row } from 'react-bootstrap';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { InfoAlert } from './Alert';
import ChartCity from './ChartCity';


import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';







class App extends Component {
    state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
    showWelcomeScreen: undefined,
        showChart: 'bar'
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
    const isLocal =
      window.location.href.startsWith("http://127.0.0.1") ||
      window.location.href.startsWith("http://localhost");
    if (navigator.onLine && !isLocal) {
      const accessToken = localStorage.getItem("access_token");
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted)
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events: events.slice(0, this.state.numberOfEvents),
              locations: extractLocations(events),
            });
          }
        });
    } else {
      getEvents().then((events) => {
        if (this.mounted) {
        const locations = extractLocations(events);
        this.setState({ showWelcomeScreen: false, events: events.slice(0, this.state.numberOfEvents), locations: locations, eventsTotalCount: events.length, data: this.getData(locations, events) });
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
         <div className="flex-container">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        </div>
        <Row>
          <Col>
          <Card><h4>Events in each city</h4><EventGenre events={this.state.events}/></Card></Col>
          <Col><Card><h4>Events in each city</h4><ResponsiveContainer height={400} >
                <ChartCity data={this.state.data} updateEvents={this.updateEvents} locations={this.state.locations}/>

           {/*  <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis
                type="number"
                dataKey="number"
                name="Number of events"
                allowDecimals={false}
                />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#147FE9" name='Number of events in each city'/>
              <Legend verticalAlign='bottom' height={60} />
            </ScatterChart> */}
          </ResponsiveContainer></Card></Col></Row>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
