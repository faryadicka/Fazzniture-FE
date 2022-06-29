import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Wishlist.css';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import Table from './Table.js';
import { } from '../../assets/img/Mask.png';

export class index extends Component {
  constructor() {
    super();
    this.state = {
      wishlistProducts: [],
      errorMessage: '',
    };
  }

  componentDidMount = () => {
    window.document.title = "Wishlist"
    window.scrollTo(0, 0);
  };

  render() {
    // const wishlist = [
    //   { image: require('../../assets/img/Mask.png'), name: 'Product-1', stock: 100, price: 2000 },
    //   { image: require('../../assets/img/Mask.png'), name: 'Product-2', stock: 100, price: 3000 },
    //   { image: require('../../assets/img/Mask.png'), name: 'Product-3', stock: 100, price: 2000 },
    // ];
    const { wishlist: { wishlist } } = this.props
    return (
      <div>
        <Navbar />
        <Header section="Wishlist" title="Wishlist" subtitle="Pay and get your ordered items" />
        <Table wishlist={wishlist} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    user: {
      loginData: { token },
    },
    favorite: { favoriteProducts },
    wishlist,
  } = state;
  return {
    token,
    favoriteProducts,
    wishlist
  };
};

export default connect(mapStateToProps)(index);
