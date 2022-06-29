import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./Notification.css"
import Navbar from "../../components/Navbar"
import Header from "../../components/Header/";
import Footer from "../../components/Footer";
import Notification from "./Notification.js"

export class index extends Component {
  constructor() {
    super()
    this.state = {
      notificationList: [],
      errorMessage: ""
    }
  }

  componentDidMount = () => {
    window.document.title = "Notification"
    window.scrollTo(0, 0)
  }

  render() {
    const notificationList = [{ title: "Order Notification", message: "Please finish your payment before 28/06/2022." }, { title: "Order Notification", message: "Your payment is confirmed." }, { title: "Order Notification", message: "Seller has accepted your order." }]
    return (
      <div>
        <Navbar />
        <Header title="Notification" desc="See your notifications for the latest updates" />
        <Notification notificationList={notificationList} />
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { user: { loginData: { token } }, favorite: { favoriteProducts } } = state
  return {
    token, favoriteProducts
  }
}

export default connect(mapStateToProps)(index)