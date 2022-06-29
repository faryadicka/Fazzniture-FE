import React, { Component } from "react";

//assets
import "./ProfileComponent.css";
import Edit from "../../assets/vector/edit.png";
import Edit3 from "../../assets/vector/edit-3.png";
import Logout from "../../assets/vector/log-out.png";

//component
import ModalSuccess from "../../components/ModalSuccess";

//Axios
import { updateProfileAxios } from "../../services/auth";
//ReduxAction
import {
  getProfileAction,
  logoutAuthAction,
} from "../../redux/actionCreator/user";
import { connect } from "react-redux";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderClick: true,
      emailClick: true,
      storeClick: true,
      nameClick: true,
      storeNameClick: true,
      username: "",
      email: "",
      gender: "",
      storeDesc: "",
      image: "",
      storeName: "",
      imgPreview: null,
      useSrc: true,
      updateSuccess: false,
      errorMsg: "",
      successMsg: "",
    };
    this.inputFile = React.createRef();
  }

  getProfilePage = (token) => {
    const { dispatch /*email, gender, description, pict, username*/ } =
      this.props;
    dispatch(getProfileAction(token))
      .then((res) => {
        // console.log(res.value.data);
        this.setState({
          username: res.value.data.data.username,
          email: res.value.data.data.email,
          gender: res.value.data.data.gender,
          image: res.value.data.data.pict,
          storeDesc: res.value.data.data.store_description,
          storeName: res.value.data.data.store,
        });
      })
      .catch((err) => {
        // console.log(err);
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
        this.setState(
          {
            imgPreview: reader.result,
            image: file,
            useSrc: false,
          },
          () => {
            // console.log(this.state.image);
          }
        );
      };
      reader.readAsDataURL(file);
    }
  };

  updateForm = () => {
    let body = new FormData();
    const { email, image, username, gender, storeDesc, storeName } = this.state;
    if (username !== "") {
      body.append("username", username);
    }
    if (email !== "") {
      body.append("email", email);
    }
    if (image !== null) {
      body.append("file", image);
    }
    if (gender !== "") {
      body.append("gender", gender);
    }
    if (storeDesc !== "") {
      body.append("storeDesc", storeDesc);
    }
    if (storeName !== "") {
      body.append("storeName", storeName);
    }
    return body;
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const { token } = this.props;
    const body = this.updateForm();
    console.log(body);
    updateProfileAxios(body, token)
      .then((res) => {
        console.log(res);
        this.setState({
          updateSuccess: true,
          successMsg: res.data.msg,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: err.response.msg,
        });
      });
  };

  componentDidMount() {
    window.document.title = "Profile";
    const { token } = this.props;
    this.getProfilePage(token);
  }
  render() {
    const {
      genderClick,
      emailClick,
      storeClick,
      storeNameClick,
      email,
      gender,
      storeDesc,
      nameClick,
      username,
      imgPreview,
      image,
      useSrc,
      storeName,
      updateSuccess,
      errorMsg,
      successMsg,
    } = this.state;
    const { role_id, dispatch } = this.props;
    // console.log(image);
    return (
      <>
        <div className="row">
          <div className="col-md-1">
            <img
              onClick={(event) => {
                this.inputFile.current.click();
                event.preventDefault();
              }}
              className="rounded-circle img-avatar"
              src={useSrc ? `${image}` : imgPreview}
              alt=""
            />
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
                // hidden={nameClick}
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
                onClick={(event) => {
                  this.inputFile.current.click();
                  event.preventDefault();
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
                    <button onClick={this.handleUpdate} className="btn fw-bold">
                      EDIT
                    </button>
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
                    <button onClick={this.handleUpdate} className="btn fw-bold">
                      EDIT
                    </button>
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
          {role_id === "3" ? (
            <div className="row-store-name">
              <div className="col-md-12">
                <div className="row justify-content-between">
                  <div className="col-md-6">
                    <label className="ms-md-2 form-label profile-label">
                      Store Name
                    </label>
                    <input
                      onChange={(event) => {
                        this.setState({
                          storeName: event.target.value,
                        });
                      }}
                      disabled={storeNameClick}
                      className="form-control border-0 email-value"
                      value={storeName}
                    />
                  </div>
                  <div className="col-md-1 mt-md-4 me-md-4">
                    <div className="d-flex">
                      <button
                        onClick={this.handleUpdate}
                        className="btn fw-bold"
                      >
                        EDIT
                      </button>
                      <img
                        onClick={() => {
                          if (storeNameClick) {
                            return this.setState({
                              storeNameClick: false,
                            });
                          }
                          return this.setState({
                            storeNameClick: true,
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
          ) : (
            <></>
          )}
          <div className="row-store">
            <div className="col-md-12">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <label className="ms-md-2 form-label profile-label">
                    Store Description
                  </label>
                  <input
                    onChange={(event) => {
                      this.setState({
                        storeDesc: event.target.value,
                      });
                    }}
                    disabled={storeClick}
                    className="form-control border-0 store-value"
                    value={storeDesc}
                  />
                </div>
                <div className="col-md-1 mt-md-4 me-md-4">
                  <div className="d-flex">
                    <button onClick={this.handleUpdate} className="btn fw-bold">
                      EDIT
                    </button>
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
        <button
          className="btn btn-danger mt-md-5 mt-5"
          onClick={() => {
            dispatch(logoutAuthAction({}, false));
          }}
        >
          <img src={Logout} alt="" />
          LOGOUT
        </button>
        <ModalSuccess
          showModal={updateSuccess}
          success={updateSuccess}
          message={updateSuccess ? successMsg : errorMsg}
          hideModal={() => {
            this.setState({
              updateSuccess: false,
            });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    user: {
      loginData: {
        token,
        datauser: { username, description, email, gender, pict, role_id },
      },
    },
  } = state;
  return {
    token,
    username,
    description,
    email,
    gender,
    pict,
    role_id,
  };
};

export default connect(mapStateToProps)(ProfileComponent);
