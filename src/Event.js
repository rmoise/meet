import React, { Component } from "react";
import moment from "moment";


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
    const {
      summary,
      location,
      start,
    } = this.props.event;
    const { event } = this.props;
const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate();
    return (
      <div className="event">
        <div className="event__Overview">
          <h4 className="mt-2 fw-bold event__Overview--name">{summary}</h4>
          <p className="event__Overview--localDate">{`${eventStart}`}</p>
          {location && (
            <p className=" mb-4 event__Overview--venue">
              @{summary} | {location}
            </p>
          )}
        {this.state.detailsVisible ? (
          <>
            <div className="event__Details">
              <h5 className="mt-3 fw-bold">About event</h5>
              <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">
                See details on Google Calendar
              </a>
              <p className="pt-2 event__Details--description">{event.description}</p>
            </div>
            <button
              className="mx-2 mb-2 details-btn"
              onClick={this.handleDetailsToggled}
            >
              hide details
            </button>
          </>
        ) : (
          <button className="mx-2 mb-2 details-btn" onClick={this.handleDetailsToggled}>
            show details
          </button>
        )}

          </div>
        </div>

    );
  }
}

export default Event;