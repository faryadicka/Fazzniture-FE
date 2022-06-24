import React, { Component } from 'react'

// assets
import "./CardProduct.css"

export class CardProduct extends Component {
  render() {
    return (
      <div className='col-md-4 text-center'>
        <div className="card card-products">
          <img src={this.props.image} className="card-img-top" alt="productsImage" />
          <div className="card-body">
            <p className="card-title card-title-product">{this.props.title}</p>
            <p className="card-text fw-bold">{this.props.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CardProduct