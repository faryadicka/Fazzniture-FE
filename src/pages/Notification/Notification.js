import React, { Component } from 'react'

export class Notification extends Component {
  render() {
    const {notificationList} = this.props
    return (
      <div>
        <div className='notif'>
            {notificationList.map((item) => {
                return <div className='notif-container'>
                    <div className='notif-title'>{item.title}</div>
                    <div className='notif-message'>{item.message}</div>
                </div>
            } )}
        </div>
        <div className='notif-page-container'>
            <div className='notif-page-active'>01</div>
            <div className='notif-page'>02</div>
            <div className='notif-page'>03</div>
            <div className='notif-page'>04</div>
            <div className='notif-page'>05</div>
            <div className='notif-page'>06</div>
        </div>
      </div>
    )
  }
}

export default Notification