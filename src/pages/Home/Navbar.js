import React, { Component, Fragment } from 'react'
import "./Home.css"
import withHOC from "../../helpers/withHOC";
import { connect } from 'react-redux'

export class Navbar extends Component {
    render() {
        const {navigate} = this.props
        return (
            <Fragment>
                <div className='navbar header-navbar'>
                    <div className='col-12 col-md-4'>
                        <div className='navbar-1'>
                            FAZZNITURE
                        </div>
                    </div>
                    <div className='navbar-2 col-12 col-md-4'>
                        <div className='navbar-2-content' onClick={()=>{navigate("/")}}>Home</div>
                        <div className='navbar-2-content' onClick={()=>{navigate("/")}}>Pages</div>
                        <div className='navbar-2-content' onClick={()=>{navigate("/products")}}>Shop</div>
                        <div className='navbar-2-content' onClick={()=>{navigate("/blog")}}>Blog</div>
                    </div>
                    <div className='navbar-3 col-12 col-md-4'>
                        <div><img src={require("../../assets/vector/Vector-Search.png")} alt="Search" className="navbar-3-logo"/></div>
                        <div><img src={require("../../assets/vector/Vector-Love.png")} alt="Love" className="navbar-3-logo"
                         onClick={()=>{navigate("/wishlist")}}/></div>
                        <div><img src={require("../../assets/vector/Vector-Cart.png")} alt="Cart" className="navbar-3-logo"
                         onClick={()=>{navigate("/cart")}}/></div>
                        <div className='dropdown'>
                            <img src={require("../../assets/vector/Vector-Drop.png")} alt="Drop" className="navbar-3-logo dropbtn"/>
                            <div className="dropdown-content">
                                {!this.props.isLoggedIn ?
                                <div className="dropdown-content-child" onClick={() => {navigate("/auth")}}>Login</div>:
                                <div className="dropdown-content-child" onClick={() => {navigate("/profile")}}>Profile</div>
                                }
                                {this.props.isLoggedIn ?
                                <div className="dropdown-content-child" onClick={() => {navigate("/notification")}}>Notification</div>:
                                <></>
                                }
                                {this.props.isLoggedIn ?
                                <div className="dropdown-content-child" onClick={() => {navigate("/")}}>Logout</div>:
                                <></>
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