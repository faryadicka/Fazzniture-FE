import React, { Component, Fragment } from 'react';
import './Register.css';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
// import CardProduct from "../../components/Header/CardProduct";
import Footer from "../../components/Footer";
import Register from './Register.js';

export class index extends Component {
constructor(props) {
    super(props);
    this.state = {
    };
};
  render() {
    return (
        <Fragment>
            <Navbar/>
            <Header title="My Account" desc="Register and log in with your account to be able to shop at will"/>
            <Register/>
            <Footer/>
        </Fragment>
    )
  };
};

export default index