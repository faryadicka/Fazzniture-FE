import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import BlackButton from '../../components/Black-Button';
// import Modal from "../../components/Modal"

const Forgot = (props) => {
    const [email, setEmail] = useState('')
   //  const [showModal, setShowModal] = useState(false)

    const sendLink = async ()=>{
        try {
            const body = {email}
            const result = await axios.post(`http://localhost:8000/auth/forgot-password`, body)
            modalHandler()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    const modalHandler = () => {
      // setShowModal(false)
      props.pageHandler("login")
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
           {/* <Modal  modalHandler={showModal} title="Success!" message="The email has been sent" button="Continue" navigateTo="/reset" close="true" />: */}
        </div>
     );
}

export default Forgot