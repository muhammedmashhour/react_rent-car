import React from 'react';

import Slider from "react-slick";

import './Brands.scss'

export default function Brands() {

  const BrandsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
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
    <section className="brands">
      <div className="container">
        <h3 className="head">
          <span>Compatible with vehicle brands</span>
          <span className="line"></span>
        </h3>
        <Slider {...BrandsSlider} className="brands__cards">
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b1.png" alt="dd" /></div>
          </div>
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b2.png" alt="dd" /></div>
          </div>
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b3.png" alt="dd" /></div>
          </div>
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b4.png" alt="dd" /></div>
          </div>
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b5.png" alt="dd" /></div>
          </div>
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b3.png" alt="dd" /></div>
          </div>
          <div className="brands__cards__item">
            <div><img className="m-auto" src="/imgs/b1.png" alt="dd" /></div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

