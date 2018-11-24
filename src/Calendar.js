import React, { Component } from "react";
import Door from "./Door";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [...Array(24).keys()]
    };
  }
  render() {
    return (
      <div className="calendar">
        {this.state.days.map(d => (
          <Door key={d} day={d + 1} />
        ))}
      </div>
    );
  }
}

export default Calendar;
