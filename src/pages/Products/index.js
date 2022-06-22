import React, { Component } from 'react'

//assets
import "./Product.css"
import Drop from "../../assets/dropdown.png";

//componenets
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CategoryList from '../../components/CategoryList';
import CheckBoxBrands from '../../components/CheckBoxBrands'
import CardProduct from '../../components/CardProduct';

class Products extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header title="Let's Shopping" desc="Find and buy the one you like" />
        <div className='container products-container'>
          <div className='row justify-content-between'>
            <div className='col-12 col-md-3'>
              <div className='row'>
                <div className='col-6 col-md-12 my-md-5'>
                  <div className='row'>
                    <h5>CATEGORY</h5>
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                    <CategoryList name="Accessories" qty="0" />
                  </div>
                </div>
                <div className='col-6 col-md-12'>
                  <form>
                    <h5>PRICE</h5>
                    <p>Price $from - $to</p>
                    <input type="range" className='w-100' />
                    <div className='mt-md-4'>
                      <button className='button-black-reuseable'>FILTER</button>
                    </div>
                  </form>
                </div>
                <div className='col-3 col-md-12 my-md-5'>
                  <h5>BRANDS</h5>
                  <CheckBoxBrands brands="IKEA" />
                  <CheckBoxBrands brands="IKEA" />
                  <CheckBoxBrands brands="IKEA" />
                  <CheckBoxBrands brands="IKEA" />
                  <CheckBoxBrands brands="IKEA" />
                  <CheckBoxBrands brands="IKEA" />
                </div>
                <div className='col-3 col-md-12 my-md-5'>
                  <h5 className='mb-md-4'>COLORS</h5>
                  <button className='button-color choco me-3'></button>
                  <button className='button-color blue me-3'></button>
                  <button className='button-color black me-3'></button>
                  <button className='button-color purple me-3'></button>
                  <button className='button-color green me-3'></button>
                  <button className='button-color orange'></button>
                </div>
                <div className='col-3 col-md-12 my-md-5'>
                  <h5 className='mb-md-4'>SIZES</h5>
                  <div className='d-flex gap-1'>
                    <button className='button-size'>S</button>
                    <button className='button-size'>M</button>
                    <button className='button-size'>L</button>
                    <button className='button-size'>XL</button>
                    <button className='button-size'>XXL</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='d-flex justify-content-between mt-4 mt-md-0'>
                <div className='desc-pagination'>Showing 1-12 of 39 Results</div>
                <div className='sort-by'>
                  <div className="dropdown">
                    <span>Sort by <img src={Drop} alt="dropdown" /></span>
                    <div className="dropdown-content">
                      <p>Hello World!</p>
                      <p>Hello World!</p>
                      <p>Hello World!</p>
                      <p>Hello World!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row justify-content-between mt-md-4'>
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
                <CardProduct title="Coaster 506222-CO Loveseat" price="$765.99" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Products