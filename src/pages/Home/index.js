import React, { Component } from 'react'
import "./Home.css"
import Navbar from "./Navbar.js"
import Jumbotron from "./Jumbotron.js"
import CardLeft from "./CardLeft.js"
import CardRight from "./CardRight.js"
import Testimony from "./Testimony.js"
import Footer from "../../components/Footer";

export class index extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        <CardLeft
        name="Mid-Century 1929 Sofa with Pilow"
        description="Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam"
        picture={require("../../assets/img/product-left.png")}
        id="1"/>
        <CardRight
        name="Mini Modern Lamp"
        description="Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam"
        picture={require("../../assets/img/product-right.png")}
        id="2"/>
        <Testimony/>
        <Footer/>
      </div>
    )
  }
}

export default index