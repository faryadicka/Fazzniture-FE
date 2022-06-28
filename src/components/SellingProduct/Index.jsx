import React, { Component } from "react";
import { connect } from "react-redux";

import "./SellingProduct.css";
import AddImage from "../../assets/img/addimage.png";
import {createProduct} from "../../redux/actionCreator/products";
import Modal from "../Modal"

export class SellingProduct extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      imgPreview: [],
      file1: "",
      file2: "",
      file3: "",
      file4: "",
      file5: "",
      name: "",
      description: "",
      brands_id: "",
      category_id: "",
      size_id: "",
      price: "",
      stock: "",
      condition:"",
    };
    this.inputFile = React.createRef();
  }

  handleMultipleUpload = (event) => {
    event.preventDefault();
    let files = event.target.files;
    this.setState({
      file1: files[0],
      file2: files[1],
      file3: files[2],
      file4: files[4],
      file5: files[5]
    })
    if (files) {
      Array.from(files).forEach((file) => {
        let reader = new FileReader();
        reader.onload = () => {
          this.setState((prevImage) => ({
            files: [...prevImage.files, file],
            imgPreview: [...prevImage.imgPreview, reader.result],
          }));
        };
        reader.readAsDataURL(file);
      });
      // const fileArray = Array.from(event.target.files).map((file) =>
      //   console.log(URL.createObjectURL(file))
      // );
      // console.log(fileArray[0]);
      // this.setState((prevImage) => ({
      //   files: [...prevImage.files, fileArray],
      // }));
    }
  };
  createForm= () => {
    let body = new FormData()

    const {file1, file2, file3, file4, file5, name, description, brands_id, category_id, size_id, price, stock, condition} = this.state
    if(file1 !== ""){
      body.append("file", file1)
    }
    if(file2 !== ""){
      body.append("file", file2)
    }
    if(file3 !== ""){
      body.append("file", file3)
    }
    if(file4 !== ""){
      body.append("file", file4)
    }
    if(file5 !== ""){
      body.append("file", file5)
    }
    if(name !== ""){
      body.append("name", name)
    }
    if(description !== ""){
      body.append("description", description)
    }
    if(brands_id !== ""){
      body.append("brands_id", brands_id)
    }
    if(category_id !== ""){
      body.append("category_id", category_id)
    }
    if(size_id !== ""){
      body.append("size_id", size_id)
    }
    if(price !== ""){
      body.append("price", price)
    }
    if(stock !== ""){
      body.append("stock", stock)
    }
    if(condition !== ""){
      body.append("condition", condition)
    }
    return body
  }
  createNewProduct = (e) => {
    e.preventDefault()
    const body = this.createForm()
    const {dispatch, token} = this.props
    dispatch(createProduct(body, token))
    .then((res) => {this.setState({showModal:true})})
    .catch((err) => {console.log(err)})
  }
      modalHandler = () => {
        this.setState({
          showModal: false,
        })
        this.props.pageHandler("login")
      }

  render() {
    const { imgPreview } = this.state;
    return (
      <>
        <form className="row justify-content-center">
          <div className="col-md-5">
            <h5 className="fw-bold d-block mb-md-5 mb-4">Inventory</h5>
            <input
              type="text"
              placeholder="Name of goods*"
              className="w-100 mb-md-5 mb-4 p-2"
            />{" "}
            <br />
            <textarea
              cols="30"
              rows="8"
              className="w-100 p-2"
              placeholder="Description Product *"
            >
              {/* Description Product * */}
            </textarea>
            <h5 className="fw-bold d-block my-md-5 my-4">Item Details</h5>
            <input
              type="text"
              placeholder="Unit price *"
              className="w-100 mb-md-5 p-2"
              onChange={(e) => {this.setState({price: e.target.value})}}
            />
            <input
              type="text"
              placeholder="Unit stock *"
              className="w-100 mb-md-5 p-2"
              onChange={(e) => {this.setState({stock: e.target.value})}}
            />


            <p>Stock Condition</p>
            <input
              type="radio"
              name="conditional"
              id="New"
              className="me-md-1"
              value="1"
              onChange={(e) => {this.setState({condition: e.target.value})}}
            />
            <label htmlFor="New" className="me-md-5 me-3">
              New Product
            </label>
            <input
              type="radio"
              name="conditional"
              id="Second"
              className="me-md-1"
              value="2"
              onChange={(e) => {this.setState({condition: e.target.value})}}
            />
            <label htmlFor="Second">Second Product</label>

            <p>Category</p>
            <input
              type="radio"
              name="category"
              id="Accessories"
              className="me-md-1"
              value="1"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Accessories" className="me-md-5">
              Accessories
            </label>
            <input
              type="radio"
              name="category"
              id="Brands"
              className="me-md-1"
              value="2"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Brands">
              Brands
            </label>
            <input
              type="radio"
              name="category"
              id="Clothing"
              className="me-md-1"
              value="3"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Clothing">
              Clothing
            </label>
            <input
              type="radio"
              name="category"
              id="Fashion"
              className="me-md-1"
              value="4"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Fashion">
              Fashion
            </label>
            <input
              type="radio"
              name="category"
              id="Furniture"
              className="me-md-1"
              value="5"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Furniture">
              Furniture
            </label>
            <input
              type="radio"
              name="category"
              id="Men"
              className="me-md-1"
              value="6"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Men">
              Men
            </label>
            <input
              type="radio"
              name="category"
              id="Woman"
              className="me-md-1"
              value="7"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Woman">
              Woman
            </label>
            <input
              type="radio"
              name="category"
              id="Shoes"
              className="me-md-1"
              value="8"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Shoes">
              Shoes
            </label>
            <input
              type="radio"
              name="category"
              id="Wallets"
              className="me-md-1"
              value="9"
              onChange={(e) => {this.setState({category_id: e.target.value})}}
            />
            <label htmlFor="Wallets">
              Wallets
            </label>

            <p>Size</p>
            <input
              type="radio"
              name="size"
              id="S"
              className="me-md-1"
              value="1"
              onChange={(e) => {this.setState({size_id: e.target.value})}}
            />
            <label htmlFor="S" className="me-md-5">
              S
            </label>
            <input
              type="radio"
              name="size"
              id="M"
              className="me-md-1"
              value="2"
              onChange={(e) => {this.setState({size_id: e.target.value})}}
            />
            <label htmlFor="M">
              M
            </label>
            <input
              type="radio"
              name="size"
              id="L"
              className="me-md-1"
              value="3"
              onChange={(e) => {this.setState({size_id: e.target.value})}}
            />
            <label htmlFor="L">
              L
            </label>
            <input
              type="radio"
              name="size"
              id="XL"
              className="me-md-1"
              value="4"
              onChange={(e) => {this.setState({size_id: e.target.value})}}
            />
            <label htmlFor="XL">
              XL
            </label>
            <input
              type="radio"
              name="size"
              id="XXL"
              className="me-md-1"
              value="5"
              onChange={(e) => {this.setState({size_id: e.target.value})}}
            />
            <label htmlFor="XXL">
              XXL
            </label>
            <input
              type="radio"
              name="size"
              id="PULL SIZE"
              className="me-md-1"
              value="6"
              onChange={(e) => {this.setState({size_id: e.target.value})}}
            />
            <label htmlFor="PULL SIZE">
              PULL SIZE
            </label>

            <p>Brands</p>
            <input
              type="radio"
              name="brands"
              id="IKEA"
              className="me-md-1"
              value="1"
              onChange={(e) => {this.setState({brands_id: e.target.value})}}
            />
            <label htmlFor="IKEA" className="me-md-5">
              IKEA
            </label>
            <input
              type="radio"
              name="brands"
              id="Mr Royal"
              className="me-md-1"
              value="2"
              onChange={(e) => {this.setState({brands_id: e.target.value})}}
            />
            <label htmlFor="Mr Royal" className="me-md-5">
              Mr Royal
            </label>
            <input
              type="radio"
              name="brands"
              id="Sweet House"
              className="me-md-1"
              value="3"
              onChange={(e) => {this.setState({brands_id: e.target.value})}}
            />
            <label htmlFor="Sweet House" className="me-md-5">
              Sweet House
            </label>
            <input
              type="radio"
              name="brands"
              id="North Oxford"
              className="me-md-1"
              value="4"
              onChange={(e) => {this.setState({brands_id: e.target.value})}}
            />
            <label htmlFor="North Oxford" className="me-md-5">
              North Oxford
            </label>
            <input
              type="radio"
              name="brands"
              id="Mr Poppin 1929"
              className="me-md-1"
              value="5"
              onChange={(e) => {this.setState({brands_id: e.target.value})}}
            />
            <label htmlFor="Mr Poppin 1929" className="me-md-5">
              Mr Poppin 1929
            </label>


            <h5 className="fw-bold d-block my-md-5">Photo of Goods</h5>
            <input
              type="file"
              multiple
              hidden
              ref={this.inputFile}
              onChange={this.handleMultipleUpload}
            />
            <div className="d-flex image-multiple-view flex-wrap">
              {imgPreview.map((image) => (
                <img src={image} key={image} alt="previewimage" />
              ))}
              <img
                className="add-image border-0"
                src={AddImage}
                alt="addimage"
                onClick={(event) => {
                  this.inputFile.current.click();
                  event.preventDefault();
                }}
              />
            </div>
            <button className="mt-md-5 button-sell"
            // onClick={(e)=>{
              // e.preventDefault()
              // const data = {
              //   name: this.state.name,
              //   description: this.state.name,
              //   brands_id: this.state.brands_id,
              //   category_id: this.state.category_id,
              //   size_id: this.state.size_id,
              //   price: this.state.price,
              //   stock: this.state.stock,
              //   condition: this.state.condition,
              //   // files: this.state.files

              // }
              // let body = new FormData();
              // body = {...body, ...data};
              // body.append("file", this.state.file1)
              // body.append("file", this.state.file2)
              // body.append("file", this.state.file3)
              // body.append("file", this.state.file4)
              // body.append("file", this.state.file5)
              // this.createNewProduct()
              // }}
              onClick={this.createNewProduct}
              >Sell Product</button>
          </div>
        </form>
        {this.state.showModal ?
        <Modal  modalHandler={this.modalHandler} title="Success!" message="Your product is successfully added" button="Continue" navigateTo="/profile" close="true" />:
        <></>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { loginData: { token } }, favorite: {favoriteProducts} } = state
  return {
    token, favoriteProducts
  }
}

export default connect(mapStateToProps)(SellingProduct)
