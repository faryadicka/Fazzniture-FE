import React, { Component } from "react";

import "./CardOrder.css";
import Mask from "../../assets/img/img.png";

export class CardOrder extends Component {
  render() {
    return (
      <>
        <div className="d-flex container align-items-center justify-content-around card-order">
          <div className="product-list-name d-flex align-items-center">
            <img src={Mask} alt="imageorder" className="pe-md-4 image-order" />
            <p className="name-order">Fabric Mid Century Chair</p>
          </div>
          <p className="price-list">$10.50</p>
          <p className="quantity-list">02</p>
          <p className="status-list">Sent</p>
          <p className="total-list">$21.00</p>
        </div>
      </>
    );
  }
}

export default CardOrder;
