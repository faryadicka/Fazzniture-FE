import React, { Component } from "react";

import { connect } from "react-redux";
import withHOC from "../../helpers/withHOC";

//assets
import "./Product.css";
import Drop from "../../assets/vector/dropdown.png";
import GIF from "../../assets/gif/GIF.gif";

//componenets
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryList from "../../components/CategoryList";
import CheckBoxBrands from "../../components/CheckBoxBrands";
import CardProduct from "../../components/CardProduct";
import PageButton from "../../components/PageButton";
import SizeButton from "../../components/SizeButton";

//ActionReducer
import { getProductsAction } from "../../redux/actionCreator/products";
import {
  setColor,
  deleteParamsAction,
  setSort,
  setRange,
  setPage,
} from "../../redux/actionCreator/helpers";

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
      min_range: 0,
      max_range: 0,
      errorGet: false,
      page: "",
      totalPage: "",
    };
  }

  getAllCategories = () => {
    getAllCategoriesAxios()
      .then((res) => {
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
        this.setState({
          colors: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("haii");
    window.document.title = "Products";
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
    dispatch(deleteParamsAction({}));
    const { meta } = this.props.products;
    this.setState({
      totalPage: meta.totalPage,
      page: meta.page,
    });
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
      )
        .then((res) => {
          this.setState({
            errorGet: false,
          });
        })
        .catch((err) => {
          this.setState({
            errorGet: true,
          });
        });
    }
  }
  render() {
    const { data, setSearchParams, dispatch, urlParams } = this.props;
    const {
      categories,
      brands,
      sizes,
      min_range,
      max_range,
      errorGet,
      totalPage,
      page,
    } = this.state;
    let active = Number(page);
    let pageItem = [];
    for (let page = 1; page <= totalPage; page++) {
      pageItem.push(page);
    }
    return (
      <>
        <Navbar page="shop"/>
        <Header title="Let's Shopping" desc="Find and buy the one you like" section="Shop" page="Product"/>
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
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      dispatch(setRange(min_range, max_range));
                      setSearchParams(urlParams);
                    }}
                  >
                    <h5>PRICE</h5>
                    <p>
                      Price IDR {min_range} - IDR {max_range}
                    </p>
                    <input
                      type="range"
                      max={1000000}
                      value={min_range}
                      className="w-75"
                      onChange={(event) => {
                        this.setState({
                          min_range: event.target.value,
                        });
                      }}
                    />
                    <input
                      type="range"
                      max={1000000}
                      value={max_range}
                      className="w-75"
                      onChange={(event) => {
                        this.setState({
                          max_range: event.target.value,
                        });
                      }}
                    />
                    <div className="mt-md-4">
                      <button type="submit" className="filter-price">
                        Filter
                      </button>
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
                      dispatch(setColor("choco"));
                      setSearchParams(urlParams);
                    }}
                    className="button-color choco me-3"
                  ></button>
                  <button
                    onClick={() => {
                      dispatch(setColor("blue"));
                      setSearchParams(urlParams);
                    }}
                    className="button-color blue me-3"
                  ></button>
                  <button
                    onClick={() => {
                      dispatch(setColor("black"));
                      setSearchParams(urlParams);
                    }}
                    className="button-color black me-3"
                  ></button>
                  <button
                    onClick={() => {
                      dispatch(setColor("purple"));
                      setSearchParams(urlParams);
                    }}
                    className="button-color purple me-3"
                  ></button>
                  <button
                    onClick={() => {
                      dispatch(setColor("green"));
                      setSearchParams(urlParams);
                    }}
                    className="button-color green me-3"
                  ></button>
                  <button
                    onClick={() => {
                      dispatch(setColor("orange"));
                      setSearchParams(urlParams);
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
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-between mt-4 mt-md-0">
                <div className="desc-pagination">Showing 1-12 of Results</div>
                <div className="sort-by">
                  <div className="dropdown">
                    <span>
                      Sort by <img src={Drop} alt="dropdown" />
                    </span>
                    <div className="dropdown-content">
                      <div
                        onClick={() => {
                          dispatch(setSort("price", "desc"));
                          setSearchParams(urlParams);
                        }}
                        className="more-expensive mb-3"
                      >
                        More Expensive
                      </div>
                      <div
                        onClick={() => {
                          dispatch(setSort("price", "asc"));
                          setSearchParams(urlParams);
                        }}
                        className="more-cheap"
                      >
                        More Cheap
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between gap-md-1 text-center mt-md-4">
                {errorGet ? (
                  <>
                    <h1 className="product-404 w-100">PRODUCTS NOT FOUND</h1>
                    <img src={GIF} alt="gif" />
                  </>
                ) : data ? (
                  data.map((data) => (
                    <CardProduct
                      title={data.name}
                      price={data.price}
                      image={data.file}
                      key={data.product_id}
                      id={data.product_id}
                    />
                  ))
                ) : null}
              </div>
              {errorGet ? (
                <></>
              ) : (
                pageItem.map((page) => (
                  <PageButton number={page} currentPage={active} />
                ))
              )}
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
      products,
    },
    helpers: { urlParams },
  } = state;
  return {
    data,
    urlParams,
    products,
    meta,
  };
};

export default connect(mapStateToProps)(withHOC(Products));
