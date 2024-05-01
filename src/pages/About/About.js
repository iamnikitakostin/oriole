import React from 'react'
import image from "../../assets/about.jpg";

import "./About.css";

function About() {
  return (
    <div className='app__about flex__center app__bg section__padding' id="about">
        <h1 className='headtext__base'>About us</h1>
        <div className="app__about-context">
          <div className="about__context-img">
            <img src={image} alt="restaraunt" />
          </div>
          <div className="about__context-text section__padding">
            <p className='p__base app__wrapper_info' style={{textTransform: "none", fontWeight: "400"}}>Welcome to Oriole Café, a charming eatery owned by Taiwanese locals, offering a relaxed ambiance and an array of affordable dishes.<br/>With a clean interior, ample roadside parking, and clear WiFi access, we ensure a hassle-free dining experience.<br/>Our fusion menu features Taiwanese beef soup, spicy dumplings, Kurtis sandwiches, and more, alongside our exceptional coffee.<br/>Join us for breakfast and discover why Oriole Café is a favorite among locals and visitors alike.</p>
          </div>
        </div>

    </div>
  )
}

export default About