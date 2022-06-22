import React, { Component, Fragment } from 'react';
import './Login.css';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
// import CardProduct from "../../components/Header/CardProduct";
import Footer from "../../components/Footer";
import Login from './Login.js';

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
            <Login/>
            <Footer/>
        </Fragment>
    )
  };
};

export default index