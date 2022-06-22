import React, { Component } from 'react'
import BlackButton from "../../components/Black-Button";

export class Register extends Component {
    constructor (){
        super()
        this.state = {
            isPasswordShown: false,
            error: false,
            errorMessage: ""
        }
    }
  render() {
    return (
      <div className='register-main'>
        <div className='register-left-section'>
            <div className='register-login-nav register-color-grey register-arimo-30'>Login Account</div>
            <div className='register-register-nav register-color-black register-arimo-30'>Register Account</div>
        </div>
        <div className='register-right-section'>
            <div className='register-color-black register-arimo-30 register-title'>Create Account</div>
            <label className='register-input-1'><input type="text" placeholder='Email address *' className='register-input register-arimo-12'/></label>
            <label className='register-input-2'><input placeholder='Password *' className='register-input register-arimo-12' type={`${this.state.isPasswordShown ? "text" : "password"}`} name="password"/>
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
            <BlackButton text="Register"/>
            <div className='register-bottom-container'>
                <label className='register-checkbox-container'><input type="checkbox" className='register-checkbox'/>I'm Customer</label>
                <label className='register-checkbox-container'><input type="checkbox" className='register-checkbox'/>I'm Seller</label>
            </div>
        </div>
      </div>
    )
  }
}

export default Register