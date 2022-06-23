import React, { Component } from "react";

// assets
import "./SizeButton.css";

export class SizeButton extends Component {
  state = {
    sizeClicked: false,
  };
  render() {
    const { sizeClicked } = this.state;
    return (
      <button
        onClick={() => {
          if (!sizeClicked) {
            return this.setState({
              sizeClicked: true,
            });
          }
          return this.setState({
            sizeClicked: false,
          });
        }}
        className={`button-size-products ${
          !sizeClicked ? "size-white" : "size-black"
        }`}
      >
        S
      </button>
    );
  }
}

export default SizeButton;
