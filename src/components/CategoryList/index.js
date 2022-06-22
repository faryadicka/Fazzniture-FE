import React, { Component } from 'react'
import { Link } from "react-router-dom";


class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className='d-flex justify-content-between'>
          <Link to="/" className='text-decoration-none text-dark'>{this.props.name}</Link>
          <p className='produtcs-qty'>{this.props.qty}</p>
        </div>
      </>
    )
  }
}

export default CategoryList