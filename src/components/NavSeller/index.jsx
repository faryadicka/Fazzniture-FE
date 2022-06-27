import React, { Component } from "react";

import withHOC from "../../helpers/withHOC";

import "./NavSeller.css";

class NavSeller extends Component {
  render() {
    const {
      location: { pathname },
      navigate,
    } = this.props;
    return (
      <div className="d-flex justify-content-around navigation-profile-seller">
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className={`${
            pathname === "/profile" ? "active-button" : "disable-button"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => {
            navigate("/myproduct");
          }}
          className={`${
            pathname === "/myproduct" ? "active-button" : "disable-button"
          }`}
        >
          My Product
        </button>
        <button
          onClick={() => {
            navigate("/sellingproduct");
          }}
          className={`${
            pathname === "/sellingproduct" ? "active-button" : "disable-button"
          }`}
        >
          Selling Product
        </button>
        <button
          onClick={() => {
            navigate("/myorder");
          }}
          className={`${
            pathname === "/myorder" ? "active-button" : "disable-button"
          }`}
        >
          My Order
        </button>
      </div>
    );
  }
}

export default withHOC(NavSeller);
