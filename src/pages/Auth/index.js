import React, { Component, Fragment } from 'react';
import './Login.css';
import './Register.css';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
// import CardProduct from "../../components/Header/CardProduct";
import Footer from "../../components/Footer";
import Login from './Login.js';
import Register from './Register.js';

export class index extends Component {
constructor(props) {
    super(props);
    this.state = {
      page: "login"
    };
};
pageHandler = (page) => {
  this.setState({
    page: page
  })
}
  render() {
    const {page} = this.state
    return (
        <Fragment>
            <Navbar/>
            <Header title="My Account" desc="Register and log in with your account to be able to shop at will"/>
            {page === "login" ? <Login pageHandler={this.pageHandler}/> : <Register pageHandler={this.pageHandler}/>}
            <Footer/>
        </Fragment>
    )
  };
};

export default index