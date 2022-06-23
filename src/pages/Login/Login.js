import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom"

// Components
// import BlackButton from "../../components/Black-Button";

//ReduxAction
import { loginAuthAction } from "../../redux/actionCreator/user"
class Login extends Component {
  constructor() {
    super()
    this.state = {
      isPasswordShown: false,
      error: false,
      errorMessage: "",
      email: "",
      password: "",
      successMessage: "",
      isLogin: false
    }
  }

  handleLogin = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    const { email, password } = this.state
    const body = { email, password }
    dispatch(loginAuthAction(body))
      .then((res) => {
        console.log(res)
        this.setState({
          successMessage: res.value.data.msg,
          isLogin: true
        })
      })
      .catch((err) => {
        this.setState({
          errorMessage: err.response.msg
        })
      })
  }

  render() {
    // if (this.props.token) return <Navigate to="/" />
    return (
      <div className='login-main'>
        <div className='login-left-section'>
          <div className='login-login-nav login-color-black login-arimo-30'>Login Account</div>
          <div className='login-register-nav login-color-grey login-arimo-30'>Register Account</div>
        </div>
        <div className='login-right-section'>
          <div className='login-color-black login-arimo-30 login-title'>Login</div>
          <label className='login-input-1'><input onChange={(event) => {
            this.setState({
              email: event.target.value
            })
          }} type="text" placeholder='User name or email address *' className='login-input login-arimo-12' /></label>
          <label className='login-input-2'><input onChange={(event) => {
            this.setState({
              password: event.target.value
            })
          }} placeholder='Password *' className='login-input login-arimo-12' type={`${this.state.isPasswordShown ? "text" : "password"}`} name="password" />
            <i id="visibility-button"
              value={this.state.isPasswordShown}
              onClick={() => {
                this.setState({
                  isPasswordShown: !this.state.isPasswordShown
                })
              }}>

              {this.state.isPasswordShown === true ?
                <span className="material-symbols-outlined login-eye">
                  visibility
                </span> :
                <span className="material-symbols-outlined login-eye">
                  visibility_off
                </span>
              }
            </i>
          </label>
          <button onClick={this.handleLogin} className='button-login'>LOGIN</button>
          <div className='login-bottom-container'>
            <label className='login-checkbox-container'><input type="checkbox" className='login-checkbox' />Remember me</label>
            <div className='login-forgot'>Forget your password?</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user: { loginData: { token } } } = state
  return {
    token
  }
}

export default connect(mapStateToProps)(Login)