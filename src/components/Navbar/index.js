import React, { Component, Fragment } from 'react'
import "./Navbar.css"
import withHOC from "../../helpers/withHOC";
import { connect } from 'react-redux'

//ReduxAction
import { setSearch } from "../../redux/actionCreator/helpers"

export class Navbar extends Component {
  state = {
    search: false,
    searchProduct: ""
  }
  render() {
    const { navigate, dispatch, urlParams, setSearchParams, page = "" } = this.props
    return (
      <Fragment>
        <div className={page === "home" ? "navbar header-navbar" : "navbar"}>
          <div className='col-12 col-md-4' onClick={() => { navigate("/") }}>
            <div className='navbar-1'>
              FAZZNITURE
            </div>
          </div>
          <div className='navbar-2 col-12 col-md-4'>
            <div className={page === "home" ? "navbar-2-content navbar-underline" : "navbar-2-content"} onClick={() => { navigate("/") }}>HOME</div>
            <div className={page === "pages" ? "navbar-2-content navbar-underline dropdown" : "navbar-2-content dropdown"} >
              PAGES
              <div className="dropdown-content">
                <div className="dropdown-content-child" onClick={() => { navigate("") }}>About Us</div>
                <div className="dropdown-content-child" onClick={() => { navigate("") }}>Contact Us</div>
                <div className="dropdown-content-child" onClick={() => { navigate("") }}>Cooming Soon</div>
                <div className="dropdown-content-child" onClick={() => { navigate("") }}>FAQ</div>
              </div>
            </div>
            <div className={page === "shop" ? "navbar-2-content navbar-underline dropdown" : "navbar-2-content dropdown"}>
              SHOP
              <div className="dropdown-content">
                <div className="dropdown-content-child" onClick={() => { navigate("/products") }}>Product</div>
                <div className="dropdown-content-child" onClick={() => { navigate("/cart") }}>Shopping Cart</div>
                <div className="dropdown-content-child" onClick={() => { navigate("/order-tracking") }}>Order Tracking</div>
              </div>
            </div>
            <div className={page === "blog" ? "navbar-2-content navbar-underline" : "navbar-2-content"} onClick={() => { navigate("/blog") }}>BLOG</div>
          </div>
          <div className='navbar-3 col-12 col-md-4'>
            <div><img src={require("../../assets/vector/Vector-Search.png")} alt="Search" className="navbar-3-logo" onClick={() => {
              this.setState({ search: !this.state.search })
            }} /></div>
            <div><img src={require("../../assets/vector/Vector-Love.png")} alt="Love" className="navbar-3-logo"
              onClick={() => { navigate("/wishlist") }} /></div>
            <div><img src={require("../../assets/vector/Vector-Cart.png")} alt="Cart" className="navbar-3-logo"
              onClick={() => { navigate("/cart") }} /></div>
            <div className='dropdown'>
              <img src={require("../../assets/vector/Vector-Drop.png")} alt="Drop" className="navbar-3-logo dropbtn" />
              <div className="dropdown-content dropdown-content-right">
                {!this.props.isLoggedIn ?
                  <div className="dropdown-content-child" onClick={() => { navigate("/auth") }}>Login</div> :
                  <div className="dropdown-content-child" onClick={() => { navigate("/profile") }}>Profile</div>
                }
                {this.props.isLoggedIn ?
                  <div className="dropdown-content-child" onClick={() => { navigate("/notification") }}>Notification</div> :
                  <div className="dropdown-content-child" onClick={() => { navigate("/auth") }}>Register</div>
                }
                {this.props.isLoggedIn ?
                  <div className="dropdown-content-child" onClick={() => { navigate("/chat") }}>Chat</div> :
                  <></>
                }
                {this.props.isLoggedIn ?
                  <div className="dropdown-content-child" onClick={() => { navigate("/") }}>Logout</div> :
                  <></>
                }
              </div>
            </div>
          </div>
          <form className={this.state.search ? 'navbar-search-container' : 'navbar-search-container-none'} >
            <input type="text"
              placeholder='Search'
              className='navbar-search'
              onChange={(event) => {
                this.setState({
                  searchProduct: event.target.value
                })
              }} />
            <img src={require("../../assets/vector/Vector-Search-White.png")}
              alt="Search"
              className="navbar-search-logo"
              onClick={() => {
                dispatch(setSearch(this.state.searchProduct))
                setSearchParams(urlParams)
              }} />
          </form>
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  const { user: { isLoggedIn }, helpers: { urlParams } } = state
  return {
    isLoggedIn,
    urlParams
  }
}
export default connect(mapStateToProps)(withHOC(Navbar))