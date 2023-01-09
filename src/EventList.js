// src/EventList.js

import React, { Component } from 'react';
import Event from './Event';
import { Card, Col, Row} from 'react-bootstrap';


class EventList extends Component {
render() {
  const { events } = this.props;
  return (
    <Row>
      {events.map(event =>
       <Col md={4}>
        <div key={event.id}>
          <Event event={event} />
        </div>
           </Col>
      )}
    </Row>
  );
}
}

export default EventList;