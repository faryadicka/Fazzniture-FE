import React, { Component } from 'react'
import { connect } from "react-redux";
import withHOC from '../../helpers/withHOC';


import "./CategoryList.css"

import { setCategory, deleteParamsAction } from "../../redux/actionCreator/helpers"

class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { name, qty, setSearchParams, urlParams, dispatch } = this.props
    return (
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => {
            dispatch(deleteParamsAction({}));
            if (name === "Accessories") {
              dispatch(setCategory("Accessories"))
              setSearchParams(urlParams)
            }
            if (name === "Brands") {
              dispatch(setCategory("Brands"))
              setSearchParams(urlParams)
            }
            if (name === "Clothing") {
              dispatch(setCategory("Clothing"))
              setSearchParams(urlParams)
            }
            if (name === "Fashion") {
              dispatch(setCategory("Fashion"))
              setSearchParams(urlParams)
            }
            if (name === "Furniture") {
              dispatch(setCategory("Furniture"))
              setSearchParams(urlParams)
            }
            if (name === "Men") {
              dispatch(setCategory("Men"))
              setSearchParams(urlParams)
            }
            if (name === "Woman") {
              dispatch(setCategory("Woman"))
              setSearchParams(urlParams)
            }
            if (name === "Shoes") {
              dispatch(setCategory("Shoes"))
              setSearchParams(urlParams)
            }
            if (name === "Wallets") {
              dispatch(setCategory("Wallets"))
              setSearchParams(urlParams)
            }
          }}
          className='button-categories text-dark'>{name}</button>
        <p className='produtcs-qty'>{qty}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { helpers: { urlParams } } = state
  return {
    urlParams
  }
}

export default connect(mapStateToProps)(withHOC(CategoryList))