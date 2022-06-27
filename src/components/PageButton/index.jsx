import React, { Component } from "react";

// assets
import "./PageButton.css";

class PageButton extends Component {
  state = {
    pageClicked: false,
  };
  render() {
    const { pageClicked } = this.state;
    return (
      <>
        <button
          onClick={() => {
            if (!pageClicked) {
              return this.setState({
                pageClicked: true,
              });
            }
            return this.setState({
              pageClicked: false,
            });
          }}
          className={`produtcs-pagination-button me-md-3 me-3 ${
            !pageClicked ? "page-white" : "page-black"
          }`}
        >
          {this.props.number}
        </button>
      </>
    );
  }
}

export default PageButton;
