import React, { Component, Fragment } from 'react'
import "./BlackButton.css"

export class BlackButton extends Component {
  render() {
    const { text, onClick } = this.props
    return (
      <Fragment>
        <div onClick={onClick} className='black-button bb-arimo-14 bb-color-white'>
          {text}
        </div>
      </Fragment>
    )
  }
}

export default BlackButton
