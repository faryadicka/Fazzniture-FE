import React, { Component } from 'react'

// assets
import "./CardProduct.css"
import Image from "../../assets/image.png"

export class CardProduct extends Component {
  render() {
    return (
      <div className='col-md-4 text-center'>
        <div class="card card-products">
          <img src={Image} class="card-img-top" alt="productsImage" />
          <div class="card-body">
            <p class="card-title card-title-product">{this.props.title}</p>
            <p class="card-text fw-bold">{this.props.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CardProduct