import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';

class Event extends Component {
  state = {
    detailsVisible: false,
  };

  handleDetailsToggled = () => {
    if (!this.state.detailsVisible) {
      this.setState({
        detailsVisible: true,
      });
    } else {
      this.setState({
        detailsVisible: false,
      });
    }
  };

  render() {
    const { event } = this.props;

    function convertDateTime(DateTimeRaw) {
      const userLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let DateTimeConv = new Date(DateTimeRaw).toLocaleString(userLocale, {
        timeZone: userTimeZone,
        dateStyle: 'medium',
        timeStyle: 'short',
      });
      return DateTimeConv;
    }

    const { summary } = this.props.event;

    return (
      <Card className="event px-3">
        <div className="event__Overview">
          <h5 className="mt-2 fw-bold event__Overview--name">{summary}</h5>
          <div className="datetime-container">
            <div className="icon icon-calendar"></div>
            <span className="start-time">
              {convertDateTime(event.start.dateTime)}
            </span>
          </div>
          <div className="location-container">
            <div className="icon icon-location"></div>
            <span className="location">{event.location}</span>
          </div>
          {this.state.detailsVisible ? (
            <>
              <div className="event__Details">
                <h6 className="mt-3 fw-bold">About event</h6>
                <a
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See details on Google Calendar
                </a>
                <p className="pt-2 pb-3 event__Details--description">
                  {event.description}
                </p>
              </div>
              <Card.Footer>
                <Button
                  className="mx-2 mb-2 details-btn btn-block"
                  onClick={this.handleDetailsToggled}
                >
                  hide details
                </Button>
              </Card.Footer>
            </>
          ) : (
            <Card.Footer>
              <Button
                className="mx-2 mb-2 details-btn"
                onClick={this.handleDetailsToggled}
              >
                show details
              </Button>
            </Card.Footer>
          )}
        </div>
      </Card>
    );
  }
}

export default Event;
