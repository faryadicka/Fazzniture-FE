import React, { Component } from "react";

import "./ListCart.css";
import Remove from "../../assets/vector/small-remove.png";
import ImageCart from "../../assets/vector/img.png";

export class ListCart extends Component {
  render() {
    return (
      <>
        <div className="d-flex mt-md-4 align-items-center justify-content-between">
          <img src={Remove} alt="remove" className="remove-button" />
          <img src={ImageCart} alt="" className="image-cart" />
          <p className="cart-name">Fabric Mid Century Chair</p>
          <p className="cart-price">$10.50</p>
          <div className="cart-button-count">
            <button>-</button>
            <p>qty</p>
            <button>+</button>
          </div>
          <p className="fw-bold cart-total">$21.00</p>
        </div>
      </>
    );
  }
}

export default ListCart;
