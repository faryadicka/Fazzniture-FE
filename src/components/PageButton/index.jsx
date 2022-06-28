import React, { Component } from "react";
import { connect } from "react-redux";
import withHOC from "../../helpers/withHOC";

// assets
import "./PageButton.css";

//ReduxAction
import { setPage } from "../../redux/actionCreator/helpers";
class PageButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { number, urlParams, setSearchParams, dispatch } = this.props;
    return (
      <>
        <button
          className={`produtcs-pagination-button mx-md-1 page-white`}
          onClick={() => {
            dispatch(setPage(number));
            setSearchParams(urlParams);
            window.scrollTo(0, 0);
          }}
        >
          <span>{number}</span>
        </button>
      </>
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

export default connect(mapStateToProps)(withHOC(PageButton));
