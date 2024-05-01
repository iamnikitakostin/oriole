import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import image1 from "../../assets/gallery/1.jpeg"
import image2 from "../../assets/gallery/2.jpeg"
import image3 from "../../assets/gallery/3.jpeg"
import image4 from "../../assets/gallery/4.jpeg"


import "./Gallery.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css'



function Gallery() {
  return (
    <div className='app__gallery app__bg' id="gallery">
        <h1 className='headtext__base'>
            Gallery
        </h1>
        <div className="app__gallery-content">
          <Carousel
          infiniteLoop={true} 
          dynamicHeight={false}
          emulateTouch={true} 
          showThumbs={false} 
          showStatus={false} 
          showIndicators={false}
          preventMovementUntilSwipeScrollTolerance={true}
          className="app__gallery-container">
            <div className='gallery-item'>
              <img src={image1} alt="food" />
            </div>
            <div className='gallery-item'>
              <img src={image2} alt="food" />
            </div>
            <div className='gallery-item'>
              <img src={image3} alt="food" />
            </div>
            <div className='gallery-item'>
              <img src={image4} alt="food" />
            </div>
            </Carousel>
        </div>
     
    </div>
  )
}

export default Gallery