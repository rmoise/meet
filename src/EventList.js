// src/EventList.js

import React, { Component } from 'react';
import Event from './Event';
import { Card, Col, Row} from 'react-bootstrap';


class EventList extends Component {
render() {
  const { events } = this.props;
  return (
    <Col className="d-md-flex gap-md-3">
      {events.map(event =>
          <Event event={event} />
      )}
    </Col>

  );
}
}

export default EventList;