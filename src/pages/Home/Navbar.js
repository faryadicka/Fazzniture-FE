import React, { Component, Fragment } from 'react'
import "./Home.css"
import withHOC from "../../helpers/withHOC";
import { connect } from 'react-redux'

export class Navbar extends Component {
    render() {
        const {navigate} = this.props
        return (
            <Fragment>
                <div className='header-navbar'>
                    <div>
                        <div className='header-navbar-1'>
                            FAZZNITURE
                        </div>
                    </div>
                    <div className='header-navbar-2'>
                        <div className='header-navbar-2-content' onClick={()=>{navigate("/")}}>Home</div>
                        <div className='header-navbar-2-content' onClick={()=>{navigate("/")}}>Pages</div>
                        <div className='header-navbar-2-content' onClick={()=>{navigate("/products")}}>Shop</div>
                        <div className='header-navbar-2-content' onClick={()=>{navigate("/")}}>Blog</div>
                    </div>
                    <div className='header-navbar-3'>
                        <div><img src={require("../../assets/vector/Vector-Search.png")} alt="Search" className="header-navbar-3-logo" onClick={()=>{navigate("")}}/></div>
                        <div><img src={require("../../assets/vector/Vector-Love.png")} alt="Love" className="header-navbar-3-logo" onClick={()=>{navigate("/wishlist")}}/></div>
                        <div><img src={require("../../assets/vector/Vector-Cart.png")} alt="Cart" className="header-navbar-3-logo" onClick={()=>{navigate("/cart")}}/></div>
                        <div className='dropdown'>
                            <img src={require("../../assets/vector/Vector-Drop.png")} alt="Drop" className="header-navbar-3-logo dropbtn"/>
                            <div className="dropdown-content">
                                {!this.props.isLoggedIn ?
                                <div className="dropdown-content-child" onClick={() => {navigate("/auth")}}>Login</div>:
                                <div className="dropdown-content-child" onClick={() => {navigate("/profile")}}>Profile</div>
                                }
                                {!this.props.isLoggedIn ?
                                <div className="dropdown-content-child" onClick={() => {navigate("/auth")}}>Login</div>:
                                <div className="dropdown-content-child" onClick={() => {navigate("/")}}>Logout</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { user: { isLoggedIn } } = state
    return {
      isLoggedIn
    }
  }
  
export default connect(mapStateToProps)(withHOC(Navbar))