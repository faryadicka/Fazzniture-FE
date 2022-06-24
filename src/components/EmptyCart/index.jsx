import React, { Component } from "react";

//assets
import Cart from "../../assets/vector/shopping-cart.png";

class EmptyCart extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-md-12">
              <img src={Cart} alt="emptycart" />
              <h2 className="mt-5">Your Cart is Empty</h2>
              <h5 className="mt-5">
                Please select the product you want to buy and add it to the
                cart.
              </h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EmptyCart;
