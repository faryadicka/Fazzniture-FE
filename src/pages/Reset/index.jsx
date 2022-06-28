import React from 'react';
import './resetPassword.css';
import axios from 'axios'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const ResetPassword = ()=>{
    
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const {token} = useParams()
    useEffect(()=>{
        console.log(token);
    })
    const resetPassword = async ()=>{
        try {
            const config = {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
            const body = {
                newPassword,
                confirmPassword
            }
            const result = axios.put(`http://localhost:8000/auth/reset-password`, body, config)
            console.log(result);
            console.log(token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="forgot-main">
            <Navbar/>
            <Header title="My Account"/>
           <div className='forgotMain'>
              <div className="forgot-title forgot-color-black forgot-arimo-30">Reset your password</div>
              <div className="forgot-color-black forgot-arimo-12">Please input your new Password</div>
              <label className="forgot-input-container">
                 <input type="text" placeholder="New Password" className="forgot-input forgot-arimo-12" onChange={e=>{
                    setNewPassword(e.target.value)
                 }} />
              </label>
              <label className="forgot-input-container">
                 <input type="text" placeholder="Confirm Password" className="forgot-input forgot-arimo-12" onChange={e=>{
                    setConfirmPassword(e.target.value)
                 }}/>
              </label> 
              <div className="resetButton" onClick={resetPassword}>Reset</div>
              <div
                 className="forgot-color-black forgot-arimo-12 forgot-back"
              >
                 Back to Login
              </div>
           </div>
           <Footer/>
        </div>
     );
}

export default ResetPassword;