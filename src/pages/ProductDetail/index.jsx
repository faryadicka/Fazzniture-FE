import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Helpers
import withHOC from "../../helpers/withHOC";

//Redux
import {
  // addProduct,
  // reduceProduct,
  updateProductCart,
} from "../../redux/actionCreator/cart.js";

//assets
import "./ProductDetail.css";
import Path from "../../assets/vector/Path.png";
import Rate from "../../assets/vector/product-rate.png";
import Check from "../../assets/vector/check.png";
import AddInfo from "../../assets/vector/add-info.png";
import Love from "../../assets/vector/love.png";
import Twt from "../../assets/vector/twt.png";
import Fb from "../../assets/vector/fb.png";
import Ytb from "../../assets/vector/ytb.png";
// import Mask from "../../assets/img/Mask.png";
// import Big from "../../assets/img/big.png";
// import Pd from "../../assets/img/pd.png";

// Components
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import ImageDetail from "../../components/ImageDetail";
import CardProduct from "../../components/CardProduct";

// ReduxAction
import { addWhishlistAction } from "../../redux/actionCreator/wishlist";

//Axios request
import {
  getProductByIdAxios,
  getProductRelatedAxios,
} from "../../services/products";
class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      relatedProduct: [],
      pict: [],
      brand: "",
      price: 0,
      description: "",
      category: "",
      productId: "",
      stock: 0,
      qty: 0,
      productInfo: {},
    };
  }

  getProductById = (id) => {
    getProductByIdAxios(id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          productInfo: res.data.data,
          pict: res.data.pict,
          brand: res.data.data.brand,
          price: res.data.data.price,
          description: res.data.data.description,
          category: res.data.data.category,
          productId: res.data.data.product_id,
          stock: res.data.data.unit_stock,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getProductRelated = (category) => {
    getProductRelatedAxios(category)
      .then((res) => {
        // console.log(res);
        this.setState({
          relatedProduct: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    window.document.title = "Product Detail";
    const {
      params: { id },
      wishlist: { wishlist },
    } = this.props;
    const { category } = this.state;
    this.getProductById(id);
    this.getProductRelated(category);
    console.log(wishlist);
  }

  render() {
    const {
      params: { id },
      dispatch,
    } = this.props;
    const {
      pict,
      brand,
      price,
      stock,
      productId,
      description,
      category,
      relatedProduct,
    } = this.state;
    return (
      <>
        <Navbar />
        <div className="container product-detail-container">
          <div className="d-flex">
            <div className="col-md-1 col-2">
              <Link to="/shop" className="text-decoration-none text-dark">
                Shop
              </Link>{" "}
              <img src={Path} alt="path" className="ms-md-3" />
            </div>
            <div className="col-md-2 col-4">
              <Link to="/shop" className="text-decoration-none text-dark">
                Shop Right Sidebar
              </Link>
              <img src={Path} alt="path" className="ms-md-4" />
            </div>
            <div className="col-md-1 col-1">
              <Link to="/products" className="text-decoration-none text-dark">
                Product
              </Link>
            </div>
          </div>
          <div className="row justify-content-between mt-md-5 mt-5">
            <div className="col-12 col-md-3">
              <div className="row justify-content-around">
                {pict.map((item) => (
                  <ImageDetail image={item.file} key={item.id} />
                ))}
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-8">
                  <img
                    // src={image}
                    alt="img-big"
                    className="mt-md-5 image-zoom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-md-5 ms-md-5">
            <h3>{brand}</h3>
            <img src={Rate} alt="rate" className="image-rate my-3" />
            <div className="d-flex justify-content-between">
              <h3>{price}</h3>
              <div className="info-stock mt-3 w-50">
                <img src={Check} alt="check" />
                19 Sold / {stock} In Stock
              </div>
            </div>
            <div className="desc-product-detail mt-md-4 mt-3">
              <p>{description}</p>
            </div>
            <div className="d-flex">
              <div className="counter-box">
                <button
                  className="w-100 button-count"
                  onClick={() => {
                    this.setState({ qty: this.state.qty - 1 });
                  }}
                >
                  -
                </button>
                <p className="px-2 mt-md-2">{this.state.qty}</p>
                <button
                  className="w-100 button-count"
                  onClick={() => {
                    this.setState({ qty: this.state.qty + 1 });
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="button-cart"
                onClick={() => {
                  dispatch(updateProductCart(id, this.state.qty));
                }}
              >
                Add to cart
              </button>
              <div className="square-love">
                <img src={Love} alt="love" className="love-button" />
              </div>
              <button
                onClick={() => {
                  const {
                    wishlist: { wishlist },
                  } = this.props;
                  const { pict, productInfo } = this.state;
                  productInfo.image = pict[0].file;
                  dispatch(addWhishlistAction([...wishlist, productInfo]));
                }}
                className="button-wishlist"
              >
                Add to wishlist
              </button>
            </div>
            <div className="row mt-md-5">
              <ul className="description-list">
                <li>SKU: N/A</li>
                <li>Categories: {category}</li>
                <li>Tag: Furniture, Chair, Scandinavian, Modern</li>
                <li>Product ID : {productId}</li>
              </ul>
            </div>
            <img src={AddInfo} alt="add-info" className="add-info mt-md-3" />
            <div className="d-flex mt-md-5 my-4 social-media-pd">
              <img src={Fb} alt="fb" />
              <img src={Twt} alt="twt" />
              <img src={Ytb} alt="ytb" />
            </div>
            <div className="d-flex mt-md-5 justify-content-between button-information">
              <button className="btn-unborder">Description</button>
              <button className="btn-unborder">Review</button>
              <button className="btn-unborder">Additional Information</button>
              <button className="btn-unborder">About Brand</button>
              <button className="btn-unborder">Shipping & Delivery</button>
            </div>
            <div className="row align-items-center my-md-3">
              <div className="col-md-6">
                <img
                  // src={productId.file}
                  alt="imagedesc"
                  className="image-desc"
                />
              </div>
              <div className="col-md-6 detail-desc">
                <p>{description}</p>
              </div>
            </div>
            <div className="row title-related text-center">
              <h1>Related Products</h1>
            </div>
            <div className="row justify-content-center my-md-4 my-4">
              {relatedProduct.map((product) => (
                <CardProduct
                  title={product.brand}
                  price={product.price}
                  image={product.file}
                  key={product.product_id}
                  id={product.product_id}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    products: { productId },
    cartOfProduct: { cart },
    wishlist,
  } = state;
  return {
    productId,
    cart,
    wishlist,
  };
};

export default connect(mapStateToProps)(withHOC(ProductDetail));
