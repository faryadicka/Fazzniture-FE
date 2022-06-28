import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import BlackButton from '../../components/Black-Button';
import Modal from "../../components/Modal"
const { REACT_APP_HOST } = process.env

const Forgot = (props) => {
    const [email, setEmail] = useState('')
    const [showModal, setShowModal] = useState(false)

    const sendLink = async ()=>{
        try {
            const body = {email}
            const result = await axios.post(`${REACT_APP_HOST}/auth/forgot-password`, body)
            setShowModal(true)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="forgot-main">
           <div>
              <div className="forgot-title forgot-color-black forgot-arimo-30">Forgot your Password?</div>
              <div className="forgot-color-black forgot-arimo-12">Don’t worry! Just fill in your email and we’ll send you a link</div>
              <label className="forgot-input-container">
                 <input type="text" placeholder="Your email address *" className="forgot-input forgot-arimo-12" 
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}/>
              </label>
              <div className="sendLink" onClick={sendLink}><BlackButton text="Send Link"/></div>
              <div
                 className="forgot-color-black forgot-arimo-12 forgot-back"
                 onClick={() => {
                    props.pageHandler('login');
                 }}
              >
                 Back to Login
              </div>
           </div>
           {showModal ? <Modal title="Succes!" message="Please check your email to reset your password." button="Continue" navigateTo="/" close="false" /> : <></>}
        </div>
     );
}

export default Forgot