import React, { Component } from "react";

//components
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EmptyCart from "../../components/EmptyCart";
import FilledCart from "../../components/FilledCart";

export class Cart extends Component {
  state = {
    empty: true,
  };

  componentDidMount() {
    window.document.title = "Cart";
  }
  render() {
    return (
      <>
        <Navbar page="shop" />
        <Header
          title="Your Cart"
          desc="Buy everything in your cart now!"
          section="Cart"
        />
        <div className="container my-md-5">
          {this.state.empty ? <EmptyCart /> : <FilledCart />}
        </div>
        <Footer />
      </>
    );
  }
}

export default Cart;
