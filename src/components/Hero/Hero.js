import React from 'react'
import coffee from "../../assets/logo.png";

import "./Hero.css";

function Hero() {
  return (
    <div className='app__hero'>
      <div className="app__hero-brand">
        <div className="app__hero-cup">
          <img src={coffee} alt="app logo" />
        </div>
        <div className="app__hero-text">
          <h1 className='headtext__base'>Oriole Café</h1>
          <p className='p__base'>Homemade food & specialty coffee.</p>
        </div>
      </div>
      <div className="app__hero-text">
      <p className='headtext__base' style={{textTransform: "none", fontWeight: "400"}}>Asian cuisine paired with exquisite coffee</p>
    </div>
    </div>
  )
}

export default Hero