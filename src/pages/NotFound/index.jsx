import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//assets
import "./NotFound.css";
import NF from "../../assets/img/notfound.png";

export class NotFound extends Component {
  componentDidMount() {
    window.document.title = "404";
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container notfound-container">
          <div className="row">
            <div className="col-md-7">
              <h1>404</h1>
              <h2>Page can't be found!</h2>
              <p>
                It look like that page doesn't exist, please check the URL and
                try again
              </p>
              <div className="d-flex">
                <div className="line-404 me-md-3"></div>
                <Link
                  to="/"
                  className="text-decoration-none text-light fw-bold"
                >
                  BACK TO HOMEPAGE
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <img src={NF} alt="notfoundimage" className="width-image-404" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
