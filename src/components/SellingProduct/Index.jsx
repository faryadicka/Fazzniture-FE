import React, { Component } from "react";

import "./SellingProduct.css";
import AddImage from "../../assets/img/addimage.png";

export class SellingProduct extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      imgPreview: [],
    };
    this.inputFile = React.createRef();
  }

  handleMultipleUpload = (event) => {
    event.preventDefault();
    let files = event.target.files;
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

  render() {
    const { files, imgPreview } = this.state;
    console.log(files);
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
              className="w-100 mb-md-5 p-2 mb-3"
            />
            <input
              type="text"
              placeholder="Unit stock *"
              className="w-100 mb-md-5 p-2"
            />
            <p className="my-3">Stock Condition</p>
            <input
              type="radio"
              name="conditional"
              id="New"
              className="me-md-1 me-2"
            />
            <label htmlFor="New" className="me-md-5 me-3">
              New Product
            </label>
            <input
              type="radio"
              name="conditional"
              id="Second"
              className="me-md-1 me-1"
            />
            <label htmlFor="Second">Second Product</label>
            <h5 className="fw-bold d-block my-md-5 my-4">Photo of Goods</h5>
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
            <button className="mt-md-5 button-sell mt-3">Sell Product</button>
          </div>
        </form>
      </>
    );
  }
}

export default SellingProduct;
