import React, { Component, Fragment } from 'react'
import "./Header.css"

export class Header extends Component {
    render() {
        const {section, page, title, desc} = this.props
        return (
            <Fragment>
                <div className='header-main'>
                    {section ? <div className="header-path header-arimo-16 header-color-black"><span>{section}</span> &gt; <span>{page}</span></div> : <></>}
                    <div className='header-title header-arimo-56'>{title}</div>
                    <div className='header-desc header-arimo-16'>{desc}</div>
                </div>
            </Fragment>
        )
    }
}

export default Header
