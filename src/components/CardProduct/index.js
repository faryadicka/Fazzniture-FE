import React, { Component } from 'react'
import withHOC from '../../helpers/withHOC'

// assets
import "./CardProduct.css"

class CardProduct extends Component {
  render() {
    const { navigate, id } = this.props
    return (
      <div className='col-md-4 text-center card-product-click' onClick={() => {
        navigate(`/products/detail/${id}`)
        window.scrollTo(0, 0);
      }}>
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

export default withHOC(CardProduct)