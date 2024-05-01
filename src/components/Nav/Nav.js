import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import coffee from "../../assets/coffee-cup.png"

import './Nav.css';

const Nav = () => {
  
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return(
  <nav className='app__navbar'>
    <div className="app__navbar-cup">
      <img src={coffee} alt="coffee cup" />
      <ul className='app__navbar-links'>
        <li className='p__base'><a href="#about">ABOUT US</a></li>
        <li className='p__base'><a href="#menu">OUR MENU</a></li>
        <li className='p__base'><a href="#gallery">GALLERY</a></li>
        <li className='p__base'><a href="#contact">CONTACT US</a></li>
      </ul>
    </div>


    {/* <div className='app__navbar-login'>
      <a href="#login" className='p__alt'>Log in / Register</a>
      <div/>
      <a href='/' className='p__alt'>Book Table</a>
    </div> */}
    {/* <div className="app__navbar-arrow">
      <Lottie animationData={arrow_animation} loop={true} />
    </div> */}

    {/* <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen_links'>
          <li className='p__alt'><a href="#home">Home</a></li>
          <li className='p__alt'><a href="#about">About</a></li>
          <li className='p__alt'><a href="#menu">Menu</a></li>
          <li className='p__alt'><a href="#awards">Awards</a></li>
          <li className='p__alt'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      )}
    </div> */}
  </nav>
)};

export default Nav;
