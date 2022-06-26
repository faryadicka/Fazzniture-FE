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
    const { searchParamsRedux, size, setSearchParams } = this.props;
    return (
      <button
        onClick={() => {
          if (size === "S") {
            setSearchParams({ ...searchParamsRedux, size: "S" });
          }
          if (size === "M") {
            setSearchParams({ ...searchParamsRedux, size: "M" });
          }
          if (size === "L") {
            setSearchParams({ ...searchParamsRedux, size: "L" });
          }
          if (size === "XL") {
            setSearchParams({ ...searchParamsRedux, size: "XL" });
          }
          if (size === "XXL") {
            setSearchParams({ ...searchParamsRedux, size: "XXL" });
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
  const { searchParamsRedux } = state;
  return {
    searchParamsRedux,
  };
};

export default connect(mapStateToProps)(withHOC(SizeButton));
