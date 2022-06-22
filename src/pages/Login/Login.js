import React, { Component } from 'react'
import BlackButton from "../../components/Black-Button";

export class Login extends Component {
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
      <div className='login-main'>
        <div className='login-left-section'>
            <div className='login-login-nav login-color-black login-arimo-30'>Login Account</div>
            <div className='login-register-nav login-color-grey login-arimo-30'>Register Account</div>
        </div>
        <div className='login-right-section'>
            <div className='login-color-black login-arimo-30 login-title'>Login</div>
            <label className='login-input-1'><input type="text" placeholder='User name or email address *' className='login-input login-arimo-12'/></label>
            <label className='login-input-2'><input placeholder='Password *' className='login-input login-arimo-12' type={`${this.state.isPasswordShown ? "text" : "password"}`} name="password"/>
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
                        </span>:
                        <span className="material-symbols-outlined login-eye">
                        visibility_off
                        </span>
                    }    
                </i>
            </label>
            <BlackButton text="Login"/>
            <div className='login-bottom-container'>
                <label className='login-checkbox-container'><input type="checkbox" className='login-checkbox'/>Remember me</label>
                <div className='login-forgot'>Forget your password?</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login