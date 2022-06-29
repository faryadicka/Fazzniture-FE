import React, { Component } from "react";

import "./MyOrder.css";
import CardOrder from "../CardOrder";

export class MyOrder extends Component {
  componentDidMount() {
    window.document.title = "My Order";
  }
  render() {
    return (
      <>
        <div className="container border-bottom pb-5">
          <div className="d-flex justify-content-evenly pb-3">
            <p className="myorder-header product">PRODUCTS</p>
            <p className="myorder-header price">PRICE</p>
            <p className="myorder-header quantity">QUANTITY</p>
            <p className="myorder-header status-order">STATUS ORDER</p>
            <p className="myorder-header total">TOTAL</p>
          </div>
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </div>
      </>
    );
  }
}

export default MyOrder;
