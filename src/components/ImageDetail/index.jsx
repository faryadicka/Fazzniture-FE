import React, { Component } from "react";

import "./ImageDetail.css";

class ImageDetail extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.handlerImage(this.props.image, this.props.image);
        }}
        className="col-2 col-md-12"
      >
        <img
          src={this.props.image}
          alt="imagelist"
          className="image-detail ms-md-5"
        />
      </div>
    );
  }
}

export default ImageDetail;
