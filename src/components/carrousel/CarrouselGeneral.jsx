import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarrouselGeneral() {
  return (
    <Carousel variant="dark" className='carrouselIntro'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/Img/Designs/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/Img/Designs/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/Img/Designs/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarrouselGeneral