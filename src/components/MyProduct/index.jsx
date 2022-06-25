import React, { Component } from "react";

import "./MyProduct.css";
import CardMyProduct from "../CardMyProduct";

export class MyProduct extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-between my-product-row">
          <div className="col-md-5">Products</div>
          <div className="col-md-2">Stock status</div>
          <div className="col-md-3">Price</div>
        </div>
        <div className="row">
          <CardMyProduct />
        </div>
      </>
    );
  }
}

export default MyProduct;
