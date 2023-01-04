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
import { WarningAlert } from './Alert'
import MyNavbar from './nav-bar';
import Accordion from 'react-bootstrap/Accordion';




import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';







class App extends Component {
    state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
       warningText: '',
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
    this.checkOffline();
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
          this.setState({
            showWelcomeScreen: false,
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

    checkOffline = () => {
    let warningText = navigator.onLine ? '' : 'Your device is offline. Displayed data may be outdated.';
    this.setState({ warningText });
  }
  handleQueryChange = (query) => {
    this.setState({ query });
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
      <>
      <MyNavbar/>
      <div className="App pt-0">
      {/* {!navigator.onLine && (
          <InfoAlert
            className="alert-centered"
            text="App is currently offline. You are seeing your cached data."
          />
        )} */}

                {this.state.warningText !== '' && <div className="alert-warning">
          <WarningAlert text={this.state.warningText} />
        </div>}
         <h5 className="filter fw-bold">Filter</h5>
         <div className="mb-4 flex-container">

<CitySearch locations={this.state.locations} location={this.state.location} updateEvents={this.updateEvents} query={this.state.query} handleQueryChange={this.handleQueryChange} />         <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        </div>
        <Row>
          <Col>
          <h5 className="fw-bold">Statistics</h5>
          <Accordion className='mb-2' alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5 className="fw-bold">Events by Genre</h5></Accordion.Header>
        <Accordion.Body>
<Card className='mb-4'><EventGenre events={this.state.events}/></Card>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><h5 className="fw-bold">Events in Each City</h5></Accordion.Header>
        <Accordion.Body>
<Card className='mb-4'><ResponsiveContainer height={400} >
            <ScatterChart className='city-chart'
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid/>
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis
                type="number"
                dataKey="number"
                name="Number of events"
                allowDecimals={false}
                />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#147FE9"/>
            </ScatterChart>
          </ResponsiveContainer></Card>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col></Row>
<h5 className="fw-bold mb-2 mt-2">Events</h5>
        <EventList events={this.state.events} />
      </div>
      </>
    );
  }
}

export default App;
