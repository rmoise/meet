import React, { Component } from "react";
import moment from "moment";
import { Card, Col, Row, Button } from 'react-bootstrap';


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
    let { isExpanded } = this.state;

    function convertDateTime(DateTimeRaw) {
      const userLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let DateTimeConv = new Date(DateTimeRaw).toLocaleString(userLocale, {
        timeZone: userTimeZone,
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      return DateTimeConv;
    }

    function calcDuration(start, end) {
      start = new Date(start);
      end = new Date(end);
      let timeDiff = end.getTime() - start.getTime();
      let duration = msToHM(timeDiff);
      return duration;
    }

    function msToHM(ms) {
      let seconds = ms / 1000;
      const hours = ('0' + parseInt(seconds / 3600)).slice(-2);
      seconds = seconds % 3600;
      const minutes = ('0' + parseInt(seconds / 60)).slice(-2);
      return (hours + ":" + minutes + " h");
    }

    const {
      summary,
      location,
      /* start, */
    } = this.props.event;
/*     const { event } = this.props;
const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate(); */
    return (
      <Card className="event px-3">
        <div className="event__Overview">
          <h5 className="mt-2 fw-bold event__Overview--name">{summary}</h5>
                      <div className="datetime-container"><div className="icon icon-calendar"></div><span className='start-time'>{convertDateTime(event.start.dateTime)}</span></div>
                      <div className="location-container"><div className="icon icon-location"></div><span className='location'>{event.location}</span>
            </div>
          {/* {location && (
            <p className=" pb-md-0 event__Overview--venue">
              @{summary} | {location}
            </p>
          )} */}
        {this.state.detailsVisible ? (
          <>
            <div className="event__Details">
              <h6 className="mt-3 fw-bold">About event</h6>
              <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
                See details on Google Calendar
              </a>
              <p className="pt-2 pb-3 event__Details--description">{event.description}</p>
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
          <Button className="mx-2 mb-2 details-btn" onClick={this.handleDetailsToggled}>
            show details
          </Button></Card.Footer>
        )}

          </div>
        </Card>

    );
  }
}

export default Event;