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

//Axios
import {
  getAllBrandsAxios,
  getAllColorsAxios,
  getAllCategoriesAxios,
  getAllSizesAxios,
} from "../../services/products";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      colors: [],
      sizes: [],
      brands: [],
    };
  }

  getAllCategories = () => {
    getAllCategoriesAxios()
      .then((res) => {
        // console.log(res.data);
        this.setState({
          categories: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getAllBrands = () => {
    getAllBrandsAxios()
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          brands: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getAllSizes = () => {
    getAllSizesAxios()
      .then((res) => {
        // console.log(res.data);
        this.setState({
          sizes: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getAllColors = () => {
    getAllColorsAxios()
      .then((res) => {
        // console.log(res.data);
        this.setState({
          colors: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    this.getAllCategories();
    this.getAllBrands();
    this.getAllSizes();
    this.getAllColors();
  }
  componentDidUpdate(prevProps) {
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
    if (prevProps.searchParams !== searchParams) {
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
  }
  render() {
    const {
      data,
      meta: { page, totalPage, totalData },
      searchParamsRedux,
      setSearchParams,
      // dispatch,
      helper,
    } = this.props;
    let active = Number(page);
    let pageItem = [];
    for (let page = 1; page <= totalPage; page++) {
      pageItem.push(page);
    }
    const { categories, brands, sizes } = this.state;
    console.log(helper);
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
                    {categories.map((item) => (
                      <CategoryList name={item.name} qty="0" key={item.id} />
                    ))}
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
                  {brands.map((item) => (
                    <CheckBoxBrands
                      brand={item.name}
                      id={item.id}
                      key={item.id}
                    />
                  ))}
                </div>
                <div className="col-3 col-md-12 my-md-3">
                  <h5 className="mb-md-4">COLORS</h5>
                  <button
                    onClick={() => {
                      setSearchParams({
                        color: "choco",
                      });
                    }}
                    className="button-color choco me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({
                        color: "blue",
                      });
                    }}
                    className="button-color blue me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({
                        color: "black",
                      });
                    }}
                    className="button-color black me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({
                        color: "purple",
                      });
                    }}
                    className="button-color purple me-3"
                  ></button>
                  <button
                    onClick={() => {
                      setSearchParams({ color: "green" });
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
                    {sizes.map((item) => (
                      <SizeButton size={item.name} key={item.id} />
                    ))}
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
                  Showing 1-12 of {totalData} Results
                </div>
                <div className="sort-by">
                  <div className="dropdown">
                    <span>
                      Sort by <img src={Drop} alt="dropdown" />
                    </span>
                    <div className="dropdown-content">
                      <div
                        onClick={() => {
                          setSearchParams({ sort: "price", order: "desc" });
                        }}
                        className="more-expensive mb-3"
                      >
                        More Expensive
                      </div>
                      <div
                        onClick={() => {
                          setSearchParams({ sort: "price", order: "asc" });
                        }}
                        className="more-cheap"
                      >
                        More Cheap
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-md-4">
                {data.length === 0 ? (
                  <h1>PRODUCTS NOT FOUND</h1>
                ) : (
                  data.map((data) => (
                    <CardProduct
                      title={data.name}
                      price={data.price}
                      image={data.file}
                      key={data.product_id}
                      id={data.product_id}
                    />
                  ))
                )}
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
    helper,
  } = state;
  return {
    data,
    meta,
    helper,
  };
};

export default connect(mapStateToProps)(withHOC(Products));
