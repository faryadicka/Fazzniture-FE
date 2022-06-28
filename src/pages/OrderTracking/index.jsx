import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlackButton from '../../components/Black-Button';

import './ordertracking.css';

export default class OrderTracking extends Component {
   render() {
      return (
         <>
            <Navbar page="shop"/>
            <Header section="Tracking" title="Order Tracking" desc="Track where your order arrived" />
            <section className="order-track-main">
               <section className="aside-order-track">
                  <img src={require('../../assets/img/picture-maps.png')} alt="maps-img" className="img-maps-order" />
               </section>
               <section className="right-order-track">
                  <p className="desc-order-track">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                  <div className="form-order-track">
                     <div className="id-order-track">Order Id</div>
                     <label>
                        <input type="text" placeholder="Found in your order confirmation email." className="input-order-track" />
                     </label>
                     <div className="id-order-track">Billing Email</div>
                     <label>
                        <input type="text" placeholder="Email you used during checkout" className="input-order-track" />
                     </label>
                  </div>
                  <div className="btn-submit-order-track">
                     <BlackButton text="Track Now" />
                  </div>
               </section>
            </section>
            <Footer />
         </>
      );
   }
}
