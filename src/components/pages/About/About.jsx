import React, { Component } from 'react';

import Slider from "react-slick";

import { Link } from 'react-router-dom';

import './About.scss';

export default class About extends Component {
  render() {

    const BrandsSlider = {
      dots: false,
      infinite: true,
      speed: 500,
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

    const contactSlider = {
      dots: false,
      infinite: true,
      speed: 500,
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
      <>
        <section className="about-header">
          <div className="overlay"></div>
          <div className="container">
            <div className="about-header__content">
              <h1>about company</h1>
              <div>
                <Link to="/">Home <i className="fas fa-angle-right"></i></Link>
                <span>about</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-us__content">
                  <h3>We produce modern electric vehicle charging systems</h3>
                  <p>Quisque nec rhoncus est. Curabitur maximus tristique risus, id consequat nisl tincidunt euismod. Sed eu arcu a sapien bibendum posuere eu eu orci. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis, quam nulla vehicula felis.</p>
                  <button className="primary-btn">
                    <span>sign up</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="about-us__img">
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/about-image.jpg" alt="header img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="advantages">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="head">
                  <span>What advantages will you get using an electric car?</span>
                  <span className="line"></span>
                </h3>
              </div>
              <div className="col-12 col-lg">
                <div className="advantages__cards">
                  <div className="advantages__cards__item">
                    <h6>
                      <span className="adv-icon">01</span>
                      <span className="adv-head">hight quality</span>
                    </h6>
                    <p>Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.</p>
                  </div>
                  <div className="advantages__cards__item">
                    <h6>
                      <span className="adv-icon">01</span>
                      <span className="adv-head">hight quality</span>
                    </h6>
                    <p>Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.</p>
                  </div>
                  <div className="advantages__cards__item">
                    <h6>
                      <span className="adv-icon">01</span>
                      <span className="adv-head">hight quality</span>
                    </h6>
                    <p>Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <img className="advantages-img" src="http://efuel.like-themes.com/wp-content/uploads/2018/08/advantage-1-1.png" alt="dd" />
              </div>
              <div className="col-12 col-lg">
                <div className="advantages__cards">
                  <div className="advantages__cards__item">
                    <h6>
                      <span className="adv-icon">01</span>
                      <span className="adv-head">hight quality</span>
                    </h6>
                    <p>Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.</p>
                  </div>
                  <div className="advantages__cards__item">
                    <h6>
                      <span className="adv-icon">01</span>
                      <span className="adv-head">hight quality</span>
                    </h6>
                    <p>Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.</p>
                  </div>
                  <div className="advantages__cards__item">
                    <h6>
                      <span className="adv-icon">01</span>
                      <span className="adv-head">hight quality</span>
                    </h6>
                    <p>Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brands">
          <div className="container">
            <h3 className="head">
              <span>Compatible with vehicle brands</span>
              <span className="line"></span>
            </h3>
            <Slider {...BrandsSlider} className="brands__cards">
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-1.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-2.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-3.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-4.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-5.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-5.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img className="m-auto" src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-5.png" alt="dd" /></div>
              </div>
            </Slider>
          </div>
        </section>


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
      </>
    )
  }
}


