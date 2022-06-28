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
          dispatch(setSize(size));
          setSearchParams(urlParams);
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
