import React, { Component } from 'react'

export class CardRight extends Component {
  render() {
    const {name, description, picture} = this.props;
    return (
      <div className='card-container'>
        <div className='card-details-container'>
            <div className='card-name home-arimo-50'>{name}</div>
            <div className='card-description home-arimo-13'>{description}</div>
            <div className='card-shop'>
                <div><img src={require("../../assets/vector/Rectangle-2.png")} alt="line" className='card-shop-line'/></div>
                <div className='card-shop-button home-arimo-13'>SHOP NOW</div>
            </div>
        </div>
        <div><img src={picture} alt="product" className="card-picture"/></div>
      </div>
    )
  }
}

export default CardRight