import React, { Component } from 'react'

export class Category extends Component {
  render() {
    return (
      <div>
        <div className='blog-side-title'>Categories</div>
            <div className='blog-categories'>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Furniture</div>
                    <div className='blog-categories-total'>3</div>
                </div>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Interior</div>
                    <div className='blog-categories-total'>4</div>
                </div>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Exterior</div>
                    <div className='blog-categories-total'>5</div>
                </div>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Real Estate</div>
                    <div className='blog-categories-total'>8</div>
                </div>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Construction</div>
                    <div className='blog-categories-total'>2</div>
                </div>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Business</div>
                    <div className='blog-categories-total'>6</div>
                </div>
                <div className='blog-categories-content'>
                    <div className='blog-categories-name'>Industrial</div>
                    <div className='blog-categories-total'>7</div>
                </div>
            </div>
      </div>
    )
  }
}

export default Category