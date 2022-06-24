import React, { Component } from "react";

import "./ImageDetail.css";

class ImageDetail extends Component {
  render() {
    return (
      <div className="col-2 col-md-12">
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
