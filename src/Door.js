import React, { Component } from "react";
import fetchGiph from "./gifSearchUtil";

const doorImgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLzNMDeyXFCFCLnHZ0eOMQAvuIVQI0vh7gXRpVMADD6-LBxva";

class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      gifUrl: "",
      keyword: "santa claus"
    };
  }

  async componentDidMount() {
    const { day } = this.props;
    const { keyword } = this.state;
    const gifUrl = await fetchGiph(keyword);
    this.setState({ gifUrl });
  }

  open() {
    this.setState({ opened: true });
  }

  close() {
    this.setState({ opened: false });
  }

  renderDoor() {
    const { opened, gifUrl } = this.state;
    if (opened) {
      return (
        <div className="door-opened" onClick={this.close.bind(this)}>
          <img src={this.state.gifUrl} alt="door open" />
        </div>
      );
    } else {
      return (
        <div className="door-closed" onClick={this.open.bind(this)}>
          <img src={doorImgUrl} alt="door closed" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="door">
        <div className="day">{this.props.day}</div>
        {this.renderDoor()}
      </div>
    );
  }
}

export default Door;
