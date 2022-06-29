import React, { Component } from 'react'


// assets
import "./Chat.css"
import Avachat from "../../assets/img/ava-chat.png"
import Path from "../../assets/vector/Path.png"

//component
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Chat extends Component {
  componentDidMount() {
    window.document.title = "Chat";
  }
  render() {
    return (
      <>
        <Navbar />
        <Header title="Chat" desc="See your notifications for the latest updates" />
        <div className='container chat-container'>
          <div className='d-flex justify-content-around'>
            <div className='column-list-chat border border-1 p-5'>
              LISTS
              <div className='d-flex chat-list-card align-items-center'>
                <img className='rounded-circle me-md-3' src={Avachat} alt="avachat" />
                <div className='chat-name me-md-4'>
                  <p>Name</p>
                  <p>Lorem ipsun dolor sitamet..</p>
                </div>
                <img className='path-chat' src={Path} alt="path" />
              </div>
            </div>
            <div className='column-bubble-chat'>
              BUBBLE
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Chat