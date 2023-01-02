import React, { Component } from 'react';
import { ErrorAlert } from './Alert';



class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        infoText: 'Enter number from 1 to 32',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: '',
      });
    }

    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
/*       <div>
        <div className="numberOfEvents">
          <label className='mb-5'>
            <h6>Number of Events</h6>
            <div>
            <ErrorAlert text={this.state.infoText} />
            </div>
            <input
              type="number"
              id="numberOfEvents__input"
              min="1"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </label>
        </div>
      </div> */
       <div className="numberOfEvents">
        <label htmlFor="numberOfEvents" className="number-label">Show </label>
        {/* <input
          type="number"
          id="numberOfEvents"
          className="number-input"
          value={this.state.eventCountInput}
          onChange={this.handleNumber}
        /> */}
        <select
          name="cars"
          id="numberOfEvents"
          className="number-input"
          value={this.state.eventCountInput}
          onChange={this.handleNumber}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
    );
  }
}

export default NumberOfEvents;