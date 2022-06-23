import React, { Component } from "react";
import { connect } from "react-redux";

// assets
import "./Profile.css";
import Avatar from "../../assets/img/avatar-collab.png";
import Edit from "../../assets/vector/edit.png";
import Edit3 from "../../assets/vector/edit-3.png";
import Logout from "../../assets/vector/log-out.png";

//components
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Header from "../../components/Header/index";

//ReduxAction
import { getProfileAction } from "../../redux/actionCreator/user";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderClick: true,
      emailClick: true,
      storeClick: true,
      nameClick: true,
      username: "Name",
      email: "example@mail.com",
      gender: "Unknown",
      store: "-",
      image: "",
      imgPreview: "",
      imgDefault: Avatar,
    };
    this.inputFile = React.createRef();
  }

  getProfilePage = () => {
    const { dispatch, token } = this.props;
    dispatch(getProfileAction(token)).then((res) => {
      this.setState({
        username:
          res.value.data.username === undefined
            ? "gak ada datanya"
            : res.value.data.username,
        email:
          res.value.data.email === undefined
            ? "gak ada datanya"
            : res.value.data.email,
        gender:
          res.value.data.gender === undefined
            ? "gak ada datanya"
            : res.value.data.gender,
        store:
          res.value.data.description === undefined
            ? "gak ada datanya"
            : res.value.data.description,
        image:
          res.value.data.pict === undefined
            ? "gak ada datanya"
            : res.value.data.pict,
      });
    });
  };
  handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const data = { ...this.state };
    if (file) {
      data.image = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({
          imgPreview: reader.result,
          image: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  updateForm = () => {
    let body = new FormData();
    const { email, image, username, gender, store } = this.state;
    if (username !== "") {
      body.append("username", username);
    }
    if (email !== "") {
      body.append("email", email);
    }
    if (image !== "") {
      body.append("image", image);
    }
    if (gender !== "") {
      body.append("gender", gender);
    }
    if (store !== "") {
      body.append("store", store);
    }
    return body;
  };

  handleUpdate = (event) => {
    event.preventDevault();
    //patch redux
  };

  componentDidMount() {
    const { token } = this.props;
    this.getProfilePage(token);
  }

  render() {
    const {
      genderClick,
      emailClick,
      storeClick,
      email,
      gender,
      store,
      nameClick,
      username,
      imgPreview,
      image,
    } = this.state;
    console.log(this.props.token);
    return (
      <>
        <Navbar />
        <Header
          title="Profile"
          desc="See your notifications for the latest updates"
        />
        <form className="container profile-container px-4 px-md-0">
          <div className="row">
            <div className="col-md-1">
              <img
                onClick={(event) => {
                  this.inputFile.current.click();
                  event.preventDefault();
                }}
                className="rounded-circle img-avatar"
                src={imgPreview ? imgPreview : image}
                alt=""
              ></img>
              <input
                type="file"
                name="imageprofile"
                id="imageprofile"
                hidden
                ref={this.inputFile}
                onChange={this.handleUpload}
              />
            </div>
            <div className="col-md-2 ms-md-4">
              <div className="d-flex pt-md-3">
                <input
                  hidden={nameClick}
                  onChange={(event) => {
                    this.setState({
                      username: event.target.value,
                    });
                  }}
                  className="fw-bold form-control"
                  value={username}
                  placeholder="Name"
                />
                <img
                  onClick={() => {
                    if (nameClick) {
                      return this.setState({
                        nameClick: false,
                      });
                    }
                    return this.setState({
                      nameClick: true,
                    });
                  }}
                  className="ms-md-2 img-pencil-profile"
                  src={Edit}
                  alt="edit"
                />
              </div>
              <p className="role-profile">as Costumer</p>
            </div>
          </div>
          <div className="card-profile-parent">
            <div className="row-gender">
              <div className="col-md-12">
                <div className="row justify-content-between">
                  <div className="col-md-6">
                    <label className="ms-md-2 form-label profile-label">
                      Gender
                    </label>
                    <input
                      onChange={(event) => {
                        this.setState({
                          gender: event.target.value,
                        });
                      }}
                      disabled={genderClick}
                      className="form-control border-0 gender-value w-100"
                      value={gender}
                    />
                  </div>
                  <div className="col-md-1 mt-md-4 me-md-4">
                    <div className="d-flex">
                      <button className="btn fw-bold">EDIT</button>
                      <img
                        onClick={() => {
                          if (genderClick) {
                            return this.setState({
                              genderClick: false,
                            });
                          }
                          return this.setState({
                            genderClick: true,
                          });
                        }}
                        className="ms-md-2 img-pencil-profile mt-2"
                        src={Edit3}
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-email">
              <div className="col-md-12">
                <div className="row justify-content-between">
                  <div className="col-md-6">
                    <label className="ms-md-2 form-label profile-label">
                      Email
                    </label>
                    <input
                      onChange={(event) => {
                        this.setState({
                          email: event.target.value,
                        });
                      }}
                      disabled={emailClick}
                      className="form-control border-0 email-value"
                      value={email}
                    />
                  </div>
                  <div className="col-md-1 mt-md-4 me-md-4">
                    <div className="d-flex">
                      <button className="btn fw-bold">EDIT</button>
                      <img
                        onClick={() => {
                          if (emailClick) {
                            return this.setState({
                              emailClick: false,
                            });
                          }
                          return this.setState({
                            emailClick: true,
                          });
                        }}
                        className="ms-md-2 img-pencil-profile mt-2"
                        src={Edit3}
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-store">
              <div className="col-md-12">
                <div className="row justify-content-between">
                  <div className="col-md-6">
                    <label className="ms-md-2 form-label profile-label">
                      Label
                    </label>
                    <input
                      onChange={(event) => {
                        this.setState({
                          store: event.target.value,
                        });
                      }}
                      disabled={storeClick}
                      className="form-control border-0 store-value"
                      value={store}
                    />
                  </div>
                  <div className="col-md-1 mt-md-4 me-md-4">
                    <div className="d-flex">
                      <button className="btn fw-bold">EDIT</button>
                      <img
                        onClick={() => {
                          if (storeClick) {
                            return this.setState({
                              storeClick: false,
                            });
                          }
                          return this.setState({
                            storeClick: true,
                          });
                        }}
                        className="ms-md-2 img-pencil-profile mt-2"
                        src={Edit3}
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-danger mt-md-5 mt-5">
            <img src={Logout} alt="" />
            LOGOUT
          </button>
        </form>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    user: {
      loginData: { token },
    },
  } = state;
  return {
    token,
  };
};

export default connect(mapStateToProps)(Profile);
