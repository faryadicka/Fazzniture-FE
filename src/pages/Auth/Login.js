import React, { Component } from 'react';
import { connect } from 'react-redux';
import withHOC from '../../helpers/withHOC';
// import { Navigate } from "react-router-dom"

// Components
import BlackButton from '../../components/Black-Button';

//ReduxAction
import { loginAuthAction } from '../../redux/actionCreator/user';
import ModalWarning from '../../components/ModalWarning';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      isPasswordShown: false,
      error: false,
      errorMessage: '',
      email: '',
      password: '',
      successMessage: '',
      isLogin: false,
      showModal: false
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { email, password } = this.state;
    const body = { email, password };
    dispatch(loginAuthAction(body))
      .then((res) => {
        this.setState({
          successMessage: res.value.data.msg,
          isLogin: true,
        });
        this.props.navigate('/');
      })
      .catch((err) => {
        this.setState({
          isError: true,
          errorMessage: err.response.data.msg,
        });
      });
  };

  componentDidMount() {
    const { state } = this.props.location
    if (state !== null && !state.isAuthenticated) {
      this.setState({
        showModal: true
      })
    }
  }

  render() {
    // if (this.props.token) return <Navigate to="/" />
    const { pageHandler, navigate } = this.props;
    return (
      <>
        <div className="login-main">
          <div className="login-left-section">
            <div className="login-login-nav login-color-black login-arimo-30">Login Account</div>
            <div
              className="login-register-nav login-color-grey login-arimo-30"
              onClick={() => {
                pageHandler('register');
              }}
            >
              Register Account
            </div>
          </div>
          <div className="login-right-section">
            <div className="login-color-black login-arimo-30 login-title">Login</div>
            <label className="login-input-1">
              <input
                onChange={(event) => {
                  this.setState({
                    email: event.target.value,
                  });
                }}
                type="text"
                placeholder="User name or email address *"
                className="login-input login-arimo-12"
              />
            </label>
            <label className="login-input-2">
              <input
                onChange={(event) => {
                  this.setState({
                    password: event.target.value,
                  });
                }}
                placeholder="Password *"
                className="login-input login-arimo-12"
                type={`${this.state.isPasswordShown ? 'text' : 'password'}`}
                name="password"
              />
              <div
                id="visibility-button"
                value={this.state.isPasswordShown}
                onClick={() => {
                  this.setState({
                    isPasswordShown: !this.state.isPasswordShown,
                  });
                }}
              >
                {this.state.isPasswordShown === true ? <span className="material-symbols-outlined login-eye">visibility</span> : <span className="material-symbols-outlined login-eye">visibility_off</span>}
              </div>
            </label>
            <div onClick={this.handleLogin} className="login-button">
              <BlackButton text="Login" />
              {this.state.isError === true ? <p>{this.state.errorMessage}</p> : <></>}
            </div>
            <div className="login-bottom-container">
              <label className="login-checkbox-container">
                <input type="checkbox" className="login-checkbox" />
                Remember me
              </label>
              <div
                className="login-forgot"
                onClick={() => {
                  pageHandler('forgot');
                }}
              >
                Forget your password?
              </div>
            </div>
          </div>
        </div>
        <ModalWarning message="YOU HAVE TO LOGIN FIRST" showModal={this.state.showModal} hideModal={() => {
          this.setState({
            showModal: false
          }, () => navigate("/auth", { replace: true, state: null }))
        }} />
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

export default connect(mapStateToProps)(withHOC(Login));
