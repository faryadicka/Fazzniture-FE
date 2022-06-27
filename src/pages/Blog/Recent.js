import React, { Component } from 'react'

export class Recent extends Component {
  render() {
    return (
      <div>
        <div className='blog-side-title'>Recent News</div>
        <div className='blog-recent'>
            <div><img src={require("../../assets/img/image-2.png")} alt="thumbnail" className='blog-recent-thumbnail'/></div>
            <div className='blog-recent-detail-container'>
                <div className='blog-recent-detail-title'>How To Put Movies On Iphone</div>
                <div className='blog-recent-detail-time'>24 Apr 2019, 45 mins ago</div>
            </div>
        </div>
        <div className='blog-recent'>
            <div><img src={require("../../assets/img/image-3.png")} alt="thumbnail" className='blog-recent-thumbnail'/></div>
            <div className='blog-recent-detail-container'>
                <div className='blog-recent-detail-title'>Windows Registry Cleaner Checklist</div>
                <div className='blog-recent-detail-time'>24 Apr 2019, 45 mins ago</div>
            </div>
        </div>
        <div className='blog-recent'>
            <div><img src={require("../../assets/img/image-4.png")} alt="thumbnail" className='blog-recent-thumbnail'/></div>
            <div className='blog-recent-detail-container'>
                <div className='blog-recent-detail-title'>Messes Make Memories</div>
                <div className='blog-recent-detail-time'>24 Apr 2019, 45 mins ago</div>
            </div>
        </div>
        <div className='blog-recent'>
            <div><img src={require("../../assets/img/image-5.png")} alt="thumbnail" className='blog-recent-thumbnail'/></div>
            <div className='blog-recent-detail-container'>
                <div className='blog-recent-detail-title'>Modern Light House</div>
                <div className='blog-recent-detail-time'>24 Apr 2019, 45 mins ago</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Recent