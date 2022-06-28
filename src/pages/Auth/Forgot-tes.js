import React, { Component } from 'react';
import './Forgot.css';
import BlackButton from '../../components/Black-Button';

export class index extends Component {
   render() {
      const { pageHandler } = this.props;
      return (
         <div className="forgot-main">
            <div>
               <div className="forgot-title forgot-color-black forgot-arimo-30">Forgot your Password?</div>
               <div className="forgot-color-black forgot-arimo-12">Don’t worry! Just fill in your email and we’ll send you a link</div>
               <label className="forgot-input-container">
                  <input type="text" placeholder="Your email address *" className="forgot-input forgot-arimo-12" />
               </label>
               <BlackButton text="Reset" />
               <div
                  className="forgot-color-black forgot-arimo-12 forgot-back"
                  onClick={() => {
                     pageHandler('login');
                  }}
               >
                  Back to Login
               </div>
            </div>
         </div>
      );
   }
}

export default index;
