import React, { Component } from "react";

// assets
import "./PageButton.css";

class PageButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button
          className={`produtcs-pagination-button me-md-3 me-3 page-white`}
        >
          {this.props.number}
        </button>
      </>
    );
  }
}

export default PageButton;
