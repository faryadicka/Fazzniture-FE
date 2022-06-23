import React, { Component } from 'react'

export class Jumbotron extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <div className='jumbotron-title home-arimo-60 home-color-black'>Fazzniture Store</div>
        <div className='jumbotron-subtitle home-arimo-13 home-color-black' >Made from carefully selected materials and finest craftsmanship from Indonesia, we present to you our collection. Everything you touch, feel and see will remind you of Indonesia. This is our way to reconnect with our culture and introduce Indonesia to the world. Each collection tells a different part of Indonesia and is a tribute to Indonesia's centuries-old cultural heritage.</div>
        <div className='jumbotron-button home-arimo-13 home-color-black'
        onClick={() => {
          window.scrollTo(0, 660)
        }}>Explore now</div>
        <div className='jumbotron-button home-arimo-13 home-color-black'
        onClick={() => {
          window.scrollTo(0, 660)
        }}>
            <span class="material-symbols-outlined">
                south
            </span>
        </div>
      </div>
    )
  }
}

export default Jumbotron