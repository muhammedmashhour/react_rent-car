import React, { Component } from 'react';

import Slider from "react-slick";

import './Home.scss';


import Contact from './../../partials/contact/Contact';
import Brands from '../../partials/brands/Brands';
import Advantages from '../../partials/advantages/Advantages';

class Home extends Component {
  render() {


    const ServicesSlider = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
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

    const StepsSlider = {
      dots: false,
      infinite: true,
      autoplay: true,
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

    const PlansSlider = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
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

    const blogSlider = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
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
        <section className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__content">
                  <h2>EV-Charging points</h2>
                  <h1>for your business</h1>
                  <p>Fusce ac justo ligula. Pellentesque ac metus a turpis bibendum scelerisque. Pellentesque ac orci eget urna vestibulum consequat rutrum vitae purus.</p>
                  <button className="primary-btn">
                    <span>get charging</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="header__img">
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/slider-car-full.jpg" alt="header img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <h3 className="services__head">We are the leading developer and installer of modern electric vehicle charging systems</h3>
            <Slider
            {...ServicesSlider}
              className="services__cards"
            >
              <div className="services__cards__item">
                <div>
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/serv_01-690x410.jpg" alt="d" />
                  <h3>home charging</h3>
                  <span className="line"></span>
                  <p>We are the leading developer and installer of modern electr.</p>
                  <button type="button" className="primary-btn">
                    <span>read more</span>
                  </button>
                </div>
              </div>
              <div className="services__cards__item">
                <div>
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/serv_02-690x410.jpg" alt="d" />
                  <h3>home charging</h3>
                  <span className="line"></span>
                  <p>We are the leading developer and installer of modern electr.</p>
                  <button type="button" className="primary-btn">
                    <span>read more</span>
                  </button>
                </div>
              </div>
              <div className="services__cards__item">
                <div>
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/serv_03-690x410.jpg" alt="d" />
                  <h3>home charging</h3>
                  <span className="line"></span>
                  <p>We are the leading developer and installer of modern electr.</p>
                  <button type="button" className="primary-btn">
                    <span>read more</span>
                  </button>
                </div>
              </div>
              <div className="services__cards__item">
                <div>
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/serv_04-690x410.jpg" alt="d" />
                  <h3>home charging</h3>
                  <span className="line"></span>
                  <p>We are the leading developer and installer of modern electr.</p>
                  <button type="button" className="primary-btn">
                    <span>read more</span>
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section className="steps">
          <div className="container">
            <Slider {...StepsSlider} className="steps__cards">
              <div className="steps__cards__item">
                <div className="steps__cards__item__details">
                  <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/level-1-1.png" alt="dd" /></div>
                  <div>
                    <h5>level 4</h5>
                    <span>up to 100 km, 30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="steps__cards__item">
                <div className="steps__cards__item__details">
                  <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/level-2-1.png" alt="dd" /></div>
                  <div>
                    <h5>level 4</h5>
                    <span>up to 100 km, 30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="steps__cards__item">
                <div className="steps__cards__item__details">
                  <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/level-3.png" alt="dd" /></div>
                  <div>
                    <h5>level 4</h5>
                    <span>up to 100 km, 30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="steps__cards__item">
                <div className="steps__cards__item__details">
                  <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/level-4-1.png" alt="dd" /></div>
                  <div>
                    <h5>level 4</h5>
                    <span>up to 100 km, 30 minutes</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <Advantages />

        <Brands />

        <section className="get-start">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="get-start__left">
                  <h5>$260 millions</h5>
                  <h6>Daily saving money on fuel</h6>
                  <p>Cras at elit metus. Nullam pharetra odio vel dignissim eleifend. Duis ex lorem, viverra nec scelerisque nec, eleifend at quam.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="get-start__right">
                  <h5>1300 electric cars</h5>
                  <h6>Sold every day in the world</h6>
                  <p>Quisque semper condimentum auctor. Etiam vehicula euismod lectus. Praesent at massa tempor, fringilla felis id, tempor urna.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="get-cart">
          <div className="container p-0">
            <div className="row no-gutters">
              <div className="col-lg-5 d-flex align-items-center justify-content-center">
                <div className="get-cart__left">
                  <h5><span>get your</span> charging car</h5>
                  <p>Pellentesque ac metus a turpis bibendum scelerisque. Pellentesque ac orci eget urna vestibulum consequat rutrum vitae purus.</p>
                  <button className="primary-btn" type="button">
                    <span>get your cart</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="get-cart__right">
                  <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/cards.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="plans">
          <div className="container">
          <h3 className="head">
              <span>Choose your ready-made solution</span>
              <span className="line"></span>
            </h3>
            <Slider {...PlansSlider} className="plans__cards">

              <div className="plans__cards__item">
                <div className="plans__cards__item__box">
                  <div className="plans__cards__item__box__img">
                    <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/tariff-1.png" alt="img" />
                  </div>
                  <div className="plans__cards__item__box__head">
                    basic plan
                  </div>
                  <div className="plans__cards__item__box__price">
                    595<sup>$</sup>
                  </div>
                  <ul className="plans__cards__item__box__adv">
                    <li><p>Charging station for home</p></li>
                    <li><p>Charge point setting</p></li>
                    <li><p>Free Support</p></li>
                    <li><p>1 year hardware warranty</p></li>
                    <li><p>Remote access to the device</p></li>
                  </ul>
                  <div className="plans__cards__item__box__btn">
                    <button className="primary-btn" type="button">
                      <span>sign up</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="plans__cards__item">
                <div className="plans__cards__item__box">
                  <div className="plans__cards__item__box__img">
                    <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/tariff-1.png" alt="img" />
                  </div>
                  <div className="plans__cards__item__box__head">
                    basic plan
                  </div>
                  <div className="plans__cards__item__box__price">
                    595<sup>$</sup>
                  </div>
                  <ul className="plans__cards__item__box__adv">
                    <li><p>Charging station for home</p></li>
                    <li><p>Charge point setting</p></li>
                    <li><p>Free Support</p></li>
                    <li><p>1 year hardware warranty</p></li>
                    <li><p>Remote access to the device</p></li>
                  </ul>
                  <div className="plans__cards__item__box__btn">
                    <button className="primary-btn" type="button">
                      <span>sign up</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="plans__cards__item">
                <div className="plans__cards__item__box">
                  <div className="plans__cards__item__box__img">
                    <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/tariff-1.png" alt="img" />
                  </div>
                  <div className="plans__cards__item__box__head">
                    basic plan
                  </div>
                  <div className="plans__cards__item__box__price">
                    595<sup>$</sup>
                  </div>
                  <ul className="plans__cards__item__box__adv">
                    <li><p>Charging station for home</p></li>
                    <li><p>Charge point setting</p></li>
                    <li><p>Free Support</p></li>
                    <li><p>1 year hardware warranty</p></li>
                    <li><p>Remote access to the device</p></li>
                  </ul>
                  <div className="plans__cards__item__box__btn">
                    <button className="primary-btn" type="button">
                      <span>sign up</span>
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section className="mission">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 pt-4 pb-4 d-flex align-items-start justify-content-center flex-column">
                <h6>our mission</h6>
                <p>Make the world cleaner, save natural resources, create comfort for people</p>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/mission-bg-leaves.png" alt="d" />
              </div>
            </div>
          </div>
        </section>


        <section className="blog">
          <div className="container">
          <h3 className="head">
              <span>Recent articles and news</span>
              <span className="line"></span>
            </h3>
            <Slider {...blogSlider} className="blog__cards">

              <div className="blog__cards__item">
                <div className="blog__cards__item__box">
                  <a href="#d" className="blog__cards__item__box__img">
                    <span>electric cars</span>
                    <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/blog_01-1-770x515.jpg" alt="img" />
                  </a>
                  <div className="blog__cards__item__box__head">
                    <span>
                      21 <br />may, 18
                    </span>
                    <span>
                      <i className="fas fa-comment-dots"></i> 4 comments
                    </span>
                    <span>
                      <i className="far fa-eye"></i> 848 views
                    </span>
                  </div>
                  <a href="#d" className="blog__cards__item__box__title">
                    The number of electric vehicles in the UK has doubled
                  </a>
                  <p className="blog__cards__item__box__par">Integer maximus accumsan nunc, sit amet tempor vel elit felis. Vestibulum convallis ipsum id aliquam varius. Etiam nec laore</p>
                  
                  <a href="#d" className="blog__cards__item__box__btn">
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog__cards__item">
                <div className="blog__cards__item__box">
                  <a href="#d" className="blog__cards__item__box__img">
                    <span>electric cars</span>
                    <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/blog_01-1-770x515.jpg" alt="img" />
                  </a>
                  <div className="blog__cards__item__box__head">
                    <span>
                      21 <br />may, 18
                    </span>
                    <span>
                      <i className="fas fa-comment-dots"></i> 4 comments
                    </span>
                    <span>
                      <i className="far fa-eye"></i> 848 views
                    </span>
                  </div>
                  <a href="#d" className="blog__cards__item__box__title">
                    The number of electric vehicles in the UK has doubled
                  </a>
                  <p className="blog__cards__item__box__par">Integer maximus accumsan nunc, sit amet tempor vel elit felis. Vestibulum convallis ipsum id aliquam varius. Etiam nec laore</p>
                  
                  <a href="#d" className="blog__cards__item__box__btn">
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog__cards__item">
                <div className="blog__cards__item__box">
                  <a href="#d" className="blog__cards__item__box__img">
                    <span>electric cars</span>
                    <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/blog_01-1-770x515.jpg" alt="img" />
                  </a>
                  <div className="blog__cards__item__box__head">
                    <span>
                      21 <br />may, 18
                    </span>
                    <span>
                      <i className="fas fa-comment-dots"></i> 4 comments
                    </span>
                    <span>
                      <i className="far fa-eye"></i> 848 views
                    </span>
                  </div>
                  <a href="#d" className="blog__cards__item__box__title">
                    The number of electric vehicles in the UK has doubled
                  </a>
                  <p className="blog__cards__item__box__par">Integer maximus accumsan nunc, sit amet tempor vel elit felis. Vestibulum convallis ipsum id aliquam varius. Etiam nec laore</p>
                  
                  <a href="#d" className="blog__cards__item__box__btn">
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </Slider>
            <div className="d-flex justify-content-center">
              <button className="primary-btn" type="button">
                <span>read more</span>
              </button>
            </div>
          </div>
        </section>



        <Contact />

      </>
    )
  }
}

export default Home
