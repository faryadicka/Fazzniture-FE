import React, { Component } from 'react'

// assets
import './Footer.css'
import Facebook from '../../assets/1.png'
import Twitter from '../../assets/2.png'
import Youtube from '../../assets/3.png'
import Discord from '../../assets/4.png'
import Mail from '../../assets/mail.png'
import Call from '../../assets/call.png'
import Time from '../../assets/time.png'

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='row container justify-content-center footer-padding-column'>
          <div className='col-md-3 col-10 footer-brand-column'>
            <h1>FAZZNITURE</h1>
            <p className='footer-desc'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
            <div className='d-flex justify-content-around'>
              <img src={Facebook} alt="facebook-logo" />
              <img src={Twitter} alt="facebook-logo" />
              <img src={Youtube} alt="facebook-logo" />
              <img src={Discord} alt="facebook-logo" />
            </div>
          </div>
          <div className='col-md-2 col-6 footer-company-column mt-4'>
            <ul className="footer-style-list">
              <h5 className='text-bold'>COMPANY</h5>
              <li>ABOUT US</li>
              <li>HELP CENTER</li>
              <li>LICENCES</li>
              <li>MARKET API</li>
              <li>SITE MAP</li>
            </ul>
          </div>
          <div className='col-md-2 col-6 footer-user-column mt-4'>
            <ul className="footer-style-list">
              <h5 className='text-bold'>USER FUL</h5>
              <li>THE COLLECTION</li>
              <li>SIZE GUIDE</li>
              <li>LOOKBOOK</li>
              <li>INSTAGRAM SHOP</li>
            </ul>
          </div>
          <div className='col-md-4 col-12 footer-contact-column mt-3'>
            <ul className="footer-style-list">
              <h5 className='text-bold'>CONTACT US</h5>
              <li><img src={Mail} alt="mail-logo" /> info@la-studioweb.com</li>
              <li><img src={Call} alt="call-logo" /> +44.954.954.86</li>
              <li><img src={Time} alt="time-logo" /> 9:00am - 19:00pm Monday - Sunday</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer