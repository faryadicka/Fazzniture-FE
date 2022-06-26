import React, { Component } from "react";

import { connect } from "react-redux";
import withHOC from "../../helpers/withHOC";

//assets
import "./Product.css";
import Drop from "../../assets/vector/dropdown.png";
import Favorite from "../../assets/img/favImage.png";

//componenets
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryList from "../../components/CategoryList";
import CheckBoxBrands from "../../components/CheckBoxBrands";
import CardProduct from "../../components/CardProduct";
import PageButton from "../../components/PageButton";
import SizeButton from "../../components/SizeButton";
import BlackButton from "../../components/Black-Button";

//ActionReducer
import { getProductsAction } from "../../redux/actionCreator/products";

class Products extends Component {
  componentDidMount() {
    const { dispatch, searchParams } = this.props;
    const name = searchParams.get("name") || "";
    const categories = searchParams.get("category") || "";
    const sizes = searchParams.get("size") || "";
    const colors = searchParams.get("color") || "";
    const brands = searchParams.get("brand") || "";
    const max = searchParams.get("max_range") || "";
    const min = searchParams.get("min_range") || "";
    const sort = searchParams.get("sort") || "";
    const order = searchParams.get("order") || "";
    dispatch(
      getProductsAction(
        name,
        categories,
        sizes,
        brands,
        colors,
        max,
        min,
        sort,
        order
      )
    );
  }
  render() {
    const {
      data,
      meta: { page, totalPage },
      searchParamsRedux,
      setSearchParams,
    } = this.props;
    let active = Number(page);
    let pageItem = [];
    for (let page = 1; page <= totalPage; page++) {
      pageItem.push(page);
    }
    console.log(data);
    return (
      <>
        <Navbar />
        <Header title="Let's Shopping" desc="Find and buy the one you like" />
        <div className="container products-container">
          <div className="row justify-content-between px-4 px-md-0">
            <div className="col-12 col-md-3">
              <div className="row">
                <div className="col-6 col-md-12 my-md-3">
                  <div className="row">
                    <h5>CATEGORY</h5>
                    <CategoryList name="Accessories" qty="0" key="1" />
                  </div>
                </div>
                <div className="col-6 col-md-12">
                  <form>
                    <h5>PRICE</h5>
                    <p>Price $from - $to</p>
                    <input type="range" className="w-75" />
                    <div className="mt-md-4">
                      <BlackButton text="FILTER" />
                    </div>
                  </form>
                </div>
                <div className="col-3 col-md-12 my-md-3">
                  <h5>BRANDS</h5>
                  <CheckBoxBrands brand="IKEA" id="id" key="1" />
                </div>
                <div className="col-3 col-md-12 my-md-3">
                  <h5 className="mb-md-4">COLORS</h5>
                  <button
                    onClick={() => {
                      setSearchParams({ ...searchParamsRedux, color: "choco" });
                    }}
                    className="button-color choco me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({ ...searchParamsRedux, color: "blue" });
                    }}
                    className="button-color blue me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({ ...searchParamsRedux, color: "black" });
                    }}
                    className="button-color black me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({
                        ...searchParamsRedux,
                        color: "purple",
                      });
                    }}
                    className="button-color purple me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({ ...searchParamsRedux, color: "green" });
                    }}
                    className="button-color green me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({
                        ...searchParamsRedux,
                        color: "orange",
                      });
                    }}
                    className="button-color orange"
                  ></button>
                </div>
                <div className="col-3 col-md-12 my-md-3">
                  <h5 className="mb-md-4">SIZES</h5>
                  <div className="d-flex gap-1 flex-wrap">
                    <SizeButton size="S" key="1" />
                  </div>
                </div>
                <div className="col-3 col-md-12 my-md-3">
                  <img
                    className="w-100 mt-md3-3"
                    src={Favorite}
                    alt="favorite"
                  />
                  <button className="product-button-fav">SHOP NOW</button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-between mt-4 mt-md-0">
                <div className="desc-pagination">
                  Showing 1-12 of 39 Results
                </div>
                <div className="sort-by">
                  <div className="dropdown">
                    <span>
                      Sort by <img src={Drop} alt="dropdown" />
                    </span>
                    <div className="dropdown-content">
                      <p>Hello World!</p>
                      <p>Hello World!</p>
                      <p>Hello World!</p>
                      <p>Hello World!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-md-4">
                {data.map((data) => (
                  <CardProduct
                    title={data.name}
                    price={data.price}
                    image={data.file}
                    key={data.product_id}
                    id={data.product_id}
                  />
                ))}
              </div>
              {pageItem.map((page) => (
                <PageButton number={page} currentPage={active} />
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
    products: {
      products: { data, meta },
    },
    searchParamsRedux,
  } = state;
  return {
    data,
    meta,
    searchParamsRedux,
  };
};

export default connect(mapStateToProps)(withHOC(Products));
