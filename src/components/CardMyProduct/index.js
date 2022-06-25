import React, { Component } from 'react'


import "./CardMyProduct.css"
import Image from "../../assets/img/image.png";


export class CardMyProduct extends Component {
  render() {
    return (
      <>
        <div className="d-flex card-myproduct justify-content-between align-items-center">
          <img
            src={Image}
            alt="myproductimage"
            className="image-myproduct"
          ></img>
          <p className="name-myproduct">
            Eugene Accent Table 18.9 inches Espresso
          </p>
          <p className="status-myproduct">Available</p>
          <p className="price-myproduct">$765.99</p>
          <button className="delete-myproduct">DELETE</button>
        </div>
      </>
    )
  }
}

export default CardMyProduct