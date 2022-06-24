import React, { Component } from 'react'
import { connect } from 'react-redux'

//ReduxAction
import { registerAuthAction } from "../../redux/actionCreator/register"


import BlackButton from "../../components/Black-Button";
import Modal from "../../components/Modal/index.js";

export class Register extends Component {
    constructor (){
        super()
        this.state = {
            isPasswordShown: false,
            error: false,
            errorMessage: "",
            email: "",
            password: "",
            role_id: "",
            successMessage: "",
        }
    }
    handleRegister = (event) => {
        event.preventDefault()
        const { dispatch } = this.props
        const { email, password, role_id } = this.state
        if(email === "" || password === "" || role_id === ""){
          return this.setState({
            isError: true,
            errorMessage: "Please fill in all the required fields"
          })
        }
        const body = { email, password, role_id }
        dispatch(registerAuthAction(body))
          .then((res) => {
            this.setState({
              successMessage: res.value.data.msg,
              isError: false,
              showModal: true
            })
            
          })
          .catch((err) => {
            this.setState({
              isError: true,
              errorMessage: err.response.data.msg
            })
          })
      }
      modalHandler = () => {
        this.setState({
          showModal: false,
        })
        this.props.pageHandler("login")
      }
  render() {
    const {pageHandler} = this.props
    return (
      <div className='register-main'>
        <div className='register-left-section'>
            <div className='register-login-nav register-color-grey register-arimo-30' onClick={() => {pageHandler("login")}}>Login Account</div>
            <div className='register-register-nav register-color-black register-arimo-30'>Register Account</div>
        </div>
        <div className='register-right-section'>
            <div className='register-color-black register-arimo-30 register-title'>Create Account</div>
            <label className='register-input-1'>
                <input type="text" placeholder='Email address *' className='register-input register-arimo-12'
                onChange={(event) => {
                    this.setState({
                      email: event.target.value
                    })
                }}/>
            </label>
            <label className='register-input-2'><input placeholder='Password *' className='register-input register-arimo-12' type={`${this.state.isPasswordShown ? "text" : "password"}`} name="password"
                onChange={(event) => {
                    this.setState({
                      password: event.target.value
                    })
                }}/>
                <i id="visibility-button"
                    value={this.state.isPasswordShown} 
                    onClick={() => {
                        this.setState({
                            isPasswordShown: !this.state.isPasswordShown
                        })
                    }}>
                        
                    {this.state.isPasswordShown === true ? 
                        <span className="material-symbols-outlined register-eye">
                            visibility
                        </span>:
                        <span className="material-symbols-outlined register-eye">
                        visibility_off
                        </span>
                    }    
                </i>
            </label>
            <div className='register-button' onClick={this.handleRegister}><BlackButton text="Register"/> 
            {this.state.isError === true ? <p>{this.state.errorMessage}</p> : <></>} </div>
            <form className='register-bottom-container' action="/action_page.php"
            onChange={(e) => {
                this.setState({
                    role_id: e.target.value
                })
            }}>
                <label className='register-checkbox-container' htmlFor="customer"><input id="customer" value="1" type="radio" className='register-checkbox' name="role"/>I'm Customer</label>
                <label className='register-checkbox-container' htmlFor="seller"><input id="seller" value="2" type="radio" className='register-checkbox' name="role"/>I'm Seller</label>
            </form>
        </div>
        {this.state.showModal ?
        <Modal  modalHandler={this.modalHandler} title="Success!" message="Your account is successfully registered" button="Continue" navigateTo="/" close="false" />:
        <></>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const { register } = state
    return {
      register
    }
  }
  
  export default connect(mapStateToProps)(Register)