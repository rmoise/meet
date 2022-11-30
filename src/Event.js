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
          <h2 className="event__Overview--name">{summary}</h2>
          <p className="event__Overview--localDate">{`${eventStart}`}</p>
          {location && (
            <p className="event__Overview--venue">
              @{summary} | {location}
            </p>
          )}
        {this.state.detailsVisible ? (
          <>
            <div className="event__Details">
              <h3>About event:</h3>
              <a href={event.htmlLink} className="details-link">
                See details on Google Calendar
              </a>
              <p className="event__Details--description">{event.description}</p>
            </div>
            <button
              className="details-btn"
              onClick={this.handleDetailsToggled}
            >
              hide details
            </button>
          </>
        ) : (
          <button className="details-btn" onClick={this.handleDetailsToggled}>
            show details
          </button>
        )}

          </div>
        </div>

    );
  }
}

export default Event;