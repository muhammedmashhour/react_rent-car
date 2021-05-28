import React from 'react';

import Slider from "react-slick";

import './Contact.scss'

export default function Contact() {

  const contactSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className="contact">
      <div className="container">
        <Slider {...contactSlider} className="contact__cards">
          <a href="#d" className="contact__cards__item">
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>assomf sfm osf iosdnf oi</span>
            </div>
          </a>
          <a href="#d" className="contact__cards__item">
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>assomf sfm osf iosdnf oi</span>
            </div>
          </a>
          <a href="#d" className="contact__cards__item">
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>assomf sfm osf iosdnf oi</span>
            </div>
          </a>
          <a href="#d" className="contact__cards__item">
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>assomf sfm osf iosdnf oi</span>
            </div>
          </a>
          <a href="#d" className="contact__cards__item">
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>assomf sfm osf iosdnf oi</span>
            </div>
          </a>
        </Slider>
      </div>
    </section>
  )
}

