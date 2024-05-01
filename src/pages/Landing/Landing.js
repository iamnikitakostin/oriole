import React from 'react'

import "./Landing.css"
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'

function Landing() {
  return (
    <div className='app__landing' id="home">
        <Hero/>
        <Nav/>
        <div className="app__landing-bg"></div>
    </div>
  )
}

export default Landing