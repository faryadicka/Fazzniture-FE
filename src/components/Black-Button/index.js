import React, { Component, Fragment } from 'react'
import "./BlackButton.css"

export class BlackButton extends Component {
    render() {
        const {text} = this.props
        return (
            <Fragment>
                <div className='black-button bb-arimo-14 bb-color-white'>
                    {text}
                </div>
            </Fragment>
        )
    }
}

export default BlackButton
