import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./Home.css"
import Navbar from "../../components/Navbar"
import Jumbotron from "./Jumbotron.js"
import CardLeft from "./CardLeft.js"
import CardRight from "./CardRight.js"
import Testimony from "./Testimony.js"
import Footer from "../../components/Footer";

import { getFavoriteAction } from "../../redux/actionCreator/getFavorite"

export class index extends Component {
  constructor() {
    super()
    this.state = {
      favoriteProducts: [],
      errorMessage: ""
    }
  }

  getFavoriteProduct = () => {
    const { dispatch, token } = this.props
    dispatch(getFavoriteAction(token))
      .then((res) => {
        this.setState({
          favoriteProducts: res.value.data.data
        })
      })
      .catch((err) => {
        this.setState({
          errorMessage: err.response.msg
        })
      })
  }

  componentDidMount = () => {
    window.document.title = "Home"
    window.scrollTo(0, 0)
    this.getFavoriteProduct()
  }

  render() {
    const { favoriteProducts } = this.props
    return (
      <div>
        <Navbar page="home" />
        <Jumbotron />
        {favoriteProducts.map((item) => {
          return (favoriteProducts.indexOf(item) % 2 === 0 ?
            <CardLeft
              name={item.name}
              description="Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam"
              picture={item.file}
              key={item.id}
            /> :
            <CardRight
              name={item.name}
              description="Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam"
              picture={item.file}
              key={item.id}
            />

          )
        })}


        <Testimony />
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