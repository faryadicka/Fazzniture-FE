import React, { Component, Fragment } from 'react'
import "./Home.css"

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <div className='header-navbar'>
                    <div>
                        <div className='header-navbar-1'>
                            FAZZNITURE
                        </div>
                    </div>
                    <div className='header-navbar-2'>
                        <div className='header-navbar-2-content'>Home</div>
                        <div className='header-navbar-2-content'>Pages</div>
                        <div className='header-navbar-2-content'>Shop</div>
                        <div className='header-navbar-2-content'>Blog</div>
                    </div>
                    <div className='header-navbar-3'>
                        <div><img src={require("../../assets/vector/Vector-Search.png")} alt="Search" className="header-navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Love.png")} alt="Love" className="header-navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Cart.png")} alt="Cart" className="header-navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Drop.png")} alt="Drop" className="header-navbar-3-logo"/></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Navbar