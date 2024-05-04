import React from 'react';

import coffee from "../../assets/coffee-cup.png"

import './Nav.css';

const Nav = ({setLoaded}) => {
  
  return(
  <nav className='app__navbar'>
    <div className="app__navbar-cup">
      <img src={coffee} alt="coffee cup" onLoad={() => setLoaded(true)}/>
      <ul className='app__navbar-links'>
        <li className='p__base'><a href="#about">ABOUT US</a></li>
        <li className='p__base'><a href="#menu">OUR MENU</a></li>
        <li className='p__base'><a href="#gallery">GALLERY</a></li>
        <li className='p__base'><a href="#contact">CONTACT US</a></li>
      </ul>
    </div>
  </nav>
)};

export default Nav;
