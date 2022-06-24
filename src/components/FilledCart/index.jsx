import React, { Component } from "react";

//assets
import "./FilledCart.css";
import ListCart from "../ListCart";

class FilledCart extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-5 justify-content-between">
            <div className="col-md-7">
              <div className="row header-cart justify-content-between ps-md-5">
                <div className="col-md-3">PRODUCTS</div>
                <div className="col-md-1">PRICE</div>
                <div className="col-md-1">QUANTITY</div>
                <div className="col-md-1">TOTAL</div>
              </div>
              <ListCart />
              <ListCart />
              <div className="line-cart-bottom"></div>
              <div className="d-flex mt-md-5 justify-content-between">
                <form action="" className="form-coupon">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button>Apply Coupon</button>
                </form>
                <div className="conditional-button">
                  <button>Clear Cart</button>
                  <button>Update Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 card-checkout p-4">
              <p>Cart Total</p>
              <div className="d-flex justify-content-between mt-5 fw-bold">
                <p>Sub total</p>
                <p>$125</p>
              </div>
              <div className="d-flex justify-content-between mt-5 fw-bold shipping-cart">
                <p>Shipping</p>
                <div className="shipping-radio">
                  <input
                    type="radio"
                    id="flat-rate"
                    name="shipping-cart"
                    // value=""
                  />
                  <label htmlFor="flat-rate">Flat rate: $10</label>
                  <br />{" "}
                  <input
                    type="radio"
                    id="free-shipping"
                    name="shipping-cart"
                    // value=""
                  />
                  <label htmlFor="free-shipping">Free Shipping</label>
                  <br />{" "}
                  <input
                    type="radio"
                    id="local-pickpu"
                    name="shipping-cart"
                    // value=""
                  />
                  <label htmlFor="local-pickpu">Local Pickup</label>
                </div>
              </div>
              <button className="btn-checkout">Procced To Check Out</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FilledCart;
