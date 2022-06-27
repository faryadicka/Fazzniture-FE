import React, { Component } from "react";
import { connect } from "react-redux";
import withHOC from "../../helpers/withHOC";

// assets
import "./SizeButton.css";

import { setSize } from "../../redux/actionCreator/helpers";

class SizeButton extends Component {
  state = {};
  render() {
    const { size, setSearchParams, urlParams, dispatch } = this.props;
    return (
      <button
        onClick={() => {
          if (size === "S") {
            dispatch(setSize("S"));
            setSearchParams(urlParams);
          }
          if (size === "M") {
            dispatch(setSize("M"));
            setSearchParams(urlParams);
          }
          if (size === "L") {
            dispatch(setSize("L"));
            setSearchParams(urlParams);
          }
          if (size === "XL") {
            dispatch(setSize("XL"));
            setSearchParams(urlParams);
          }
          if (size === "XXL") {
            dispatch(setSize("XXL"));
            setSearchParams(urlParams);
          }
        }}
        className={`button-size-products size-white`}
      >
        {size}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    helpers: { urlParams },
  } = state;
  return {
    urlParams,
  };
};

export default connect(mapStateToProps)(withHOC(SizeButton));
