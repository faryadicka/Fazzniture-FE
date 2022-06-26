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
    const { name, qty, setSearchParams, searchParamsRedux } = this.props
    return (
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => {
            if (name === "Accessories") {
              return setSearchParams({ ...searchParamsRedux, category: "Accessories" })
            }
            if (name === "Brands") {
              return setSearchParams({ ...searchParamsRedux, category: "Brands" })
            }
            if (name === "Clothing") {
              return setSearchParams({ ...searchParamsRedux, category: "Clothing" })
            }
            if (name === "Fashion") {
              return setSearchParams({ ...searchParamsRedux, category: "Fashion" })
            }
            if (name === "Furniture") {
              return setSearchParams({ ...searchParamsRedux, category: "Furniture" })
            }
            if (name === "Men") {
              return setSearchParams({ ...searchParamsRedux, category: "Men" })
            }
            if (name === "Woman") {
              return setSearchParams({ ...searchParamsRedux, category: "Woman" })
            }
            if (name === "Shoes") {
              return setSearchParams({ ...searchParamsRedux, category: "Shoes" })
            }
            if (name === "Wallets") {
              return setSearchParams({ ...searchParamsRedux, category: "Wallets" })
            }
          }}
          className='button-categories text-dark'>{name}</button>
        <p className='produtcs-qty'>{qty}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { searchParamsRedux } = state
  return {
    searchParamsRedux
  }
}

export default connect(mapStateToProps)(withHOC(CategoryList))