import React, { Component } from 'react'
import { connect } from "react-redux";
import withHOC from '../../helpers/withHOC';


import "./CategoryList.css"

class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { name, qty, setSearchParams } = this.props
    return (
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => {
            if (name === "Accessories") {
              return setSearchParams({ category: "Accessories" })
            }
            if (name === "Brands") {
              return setSearchParams({ category: "Brands" })
            }
            if (name === "Clothing") {
              return setSearchParams({ category: "Clothing" })
            }
            if (name === "Fashion") {
              return setSearchParams({ category: "Fashion" })
            }
            if (name === "Furniture") {
              return setSearchParams({ category: "Furniture" })
            }
            if (name === "Men") {
              return setSearchParams({ category: "Men" })
            }
            if (name === "Woman") {
              return setSearchParams({ category: "Woman" })
            }
            if (name === "Shoes") {
              return setSearchParams({ category: "Shoes" })
            }
            if (name === "Wallets") {
              return setSearchParams({ category: "Wallets" })
            }
          }}
          className='button-categories text-dark'>{name}</button>
        <p className='produtcs-qty'>{qty}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(withHOC(CategoryList))