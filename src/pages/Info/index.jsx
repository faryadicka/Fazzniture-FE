import React, { Component } from "react";
import withHOC from "../../helpers/withHOC";

// assets
import "./Profile.css";
// import Avatar from "../../assets/img/avatar-collab.png";

//components
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Header from "../../components/Header/index";
import NavSeller from "../../components/NavSeller";
import ProfileComponent from "../../components/ProfileComponent";
import MyProduct from "../../components/MyProduct";
import SellingProduct from "../../components/SellingProduct/Index";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      location: { pathname },
    } = this.props;
    console.log(this.props.location.pathname.slice(1));
    return (
      <>
        <Navbar />
        <Header
          title="Profile"
          desc="See your notifications for the latest updates"
        />
        <div className="container info-container px-4 px-md-0">
          <NavSeller />
          {pathname === "/profile" ? <ProfileComponent /> : <></>}
          {pathname === "/myproduct" ? <MyProduct /> : <></>}
          {pathname === "/sellingproduct" ? <SellingProduct /> : <></>}
        </div>
        <Footer />
      </>
    );
  }
}

export default withHOC(Profile);
