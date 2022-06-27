import React, { Component } from "react";

// assets
import "./PageButton.css";

class PageButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button className={`produtcs-pagination-button mx-md-1 page-white`}>
          {this.props.number}
        </button>
      </>
    );
  }
}

export default PageButton;
