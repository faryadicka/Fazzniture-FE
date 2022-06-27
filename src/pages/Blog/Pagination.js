import React, { Component } from 'react'

export class Pagination extends Component {
  render() {
    return (
      <div>
        <div className='pagination-page-container'>
            <div className='pagination-page-active'>01</div>
            <div className='pagination-page'>02</div>
            <div className='pagination-page'>03</div>
            <div className='pagination-page'>04</div>
            <div className='pagination-page'>05</div>
            <div className='pagination-page'>06</div>
        </div>
      </div>
    )
  }
}

export default Pagination