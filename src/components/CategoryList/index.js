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
            dispatch(setCategory(name))
            setSearchParams(urlParams)
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