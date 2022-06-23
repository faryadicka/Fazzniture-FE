import React, { Component } from 'react'

export class Testimony extends Component {
  render() {
    return (
        <div className='testimony'>
            <div className='testimony-message'>Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work.</div>
            <div className='testimony-line'><img src={require("../../assets/vector/Rectangle.png")} alt="logo"/></div>
            <div className='testimony-person'>Trevor Rivera - CEO IKEA</div>
            <div className='testimony-image-container'>
                <div className='testimony-image'><img src={require("../../assets/logo/Bitmap.png")} alt="logo"/></div>
                <div className='testimony-image'><img src={require("../../assets/logo/Bitmap-1.png")} alt="logo"/></div>
                <div className='testimony-image'><img src={require("../../assets/logo/Bitmap-2.png")} alt="logo"/></div>
                <div className='testimony-image'><img src={require("../../assets/logo/Bitmap-3.png")} alt="logo"/></div>
            </div>
        </div>
    )
  }
}

export default Testimony