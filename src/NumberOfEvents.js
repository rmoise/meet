import React, { Component } from 'react';


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
      <div>
        <div className="numberOfEvents">
          <label>
            Number of Events:
            <input
              type="number"
              id="numberOfEvents__input"
              min="1"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;