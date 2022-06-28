import React from 'react';
import './resetPassword.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlackButton from '../../components/Black-Button';
import Modal from '../../components/Modal';
import {authResetAxios} from "../../services/auth"

const ResetPassword = ()=>{
    const [showModal, setShowModal] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const {token} = useParams()
    const navigate = useNavigate()
    const resetPassword = ()=>{
        const body = {
            newPassword,
            confirmPassword
        }
        authResetAxios(body, token)
        .then(() => {
            setShowModal(true)
        })
        .catch( (error) => {
            navigate("/404");
        })
    }

    return (
        <div>
        <Navbar/>
        <Header title="My Account"/>
        <div className="forgot-main">
           <div>
              <div className="forgot-title forgot-color-black forgot-arimo-30">Reset your password</div>
              <div className="forgot-color-black forgot-arimo-12">Please input your new Password</div>
              <div className='reset-container'>
                <label className="forgot-input-container">
                    <input type="text" placeholder="Set your new password" className="forgot-input forgot-arimo-12" 
                    onChange={(e)=>{
                        setNewPassword(e.target.value)
                    }}/>
                </label>
                <label className="forgot-input-container">
                    <input type="text" placeholder="Confirm your new password" className="forgot-input forgot-arimo-12" 
                    onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                    }}/>
                </label>
              </div>
              <div className="sendLink" onClick={resetPassword}><BlackButton text="Reset"/></div>
              <div
                 className="forgot-color-black forgot-arimo-12 forgot-back"
                 onClick={() => {
                    navigate('/auth');
                 }}>
                 Back to Login
              </div>
           </div>
           {showModal ? <Modal title="Succes!" message="Please login to your account" button="Login" navigateTo="/auth" close="false" /> : <></>}
        </div>
        <Footer/>
        </div>
    );
}

export default ResetPassword;