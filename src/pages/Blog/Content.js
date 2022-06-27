import React, { Component } from 'react'
import withHOC from '../../helpers/withHOC'

export class Contents extends Component {
  render() {
    const {pict, title, date, tags, content, navigate, link} = this.props
    return (
      <div className='blog-main-content'>
        <div><img src={pict} alt="street" className='content-pict' onClick={() => {navigate(link)}}/></div>
        <div className='content-title' onClick={() => {navigate(link)}}>{title}</div>
        <div className='content-details-container'>
            <div className='content-details-logo'><img src={require("../../assets/vector/clock.png")} alt="clock"/>{date}</div>
            <div className='content-details-tags'><img src={require("../../assets/vector/tag.png")} alt="tags"/>{tags}</div>
        </div>
        <div className='content-content'>{content}</div>
        <div className='content-more' onClick={() => {navigate(link)}}>Read more<div className='content-more-line'></div></div>
      </div>
    )
  }
}

export default withHOC(Contents)