import React, { Component } from "react";
import { connect } from "react-redux";
import withHOC from "../../helpers/withHOC";

// assets
import "./SizeButton.css";

class SizeButton extends Component {
  state = {
    sizeClicked: false,
  };
  render() {
    const { sizeClicked } = this.state;
    const { size, setSearchParams } = this.props;
    return (
      <button
        onClick={() => {
          if (size === "S") {
            setSearchParams({ size: "S" });
          }
          if (size === "M") {
            setSearchParams({ size: "M" });
          }
          if (size === "L") {
            setSearchParams({ size: "L" });
          }
          if (size === "XL") {
            setSearchParams({ size: "XL" });
          }
          if (size === "XXL") {
            setSearchParams({ size: "XXL" });
          }
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
        {size}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(withHOC(SizeButton));
