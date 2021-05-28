import React, { Component } from 'react';

import Slider from "react-slick";

import { Link } from 'react-router-dom';

import './Contact.scss';

export default class Contact extends Component {
  render() {


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
        <section className="contact-header">
          <div className="overlay"></div>
          <div className="container">
            <div className="contact-header__content">
              <h1>contact company</h1>
              <div>
                <Link to="/">Home <i className="fas fa-angle-right"></i></Link>
                <span>contact</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-us__left">
                  <h3>central office</h3>
                  <p>Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada condimentum ultrices. Sed et mauris a purus fermentum elementum. Sed tristique semper enim, et gravida orci iaculis et. Nulla facilisi.</p>
                  <ul>
                    <li><i className="fas fa-phone-alt"></i> 0(800) 890-90-609</li>
                    <li><i className="fab fa-skype"></i> SkypeName</li>
                    <li><i className="fas fa-map-marker-alt"></i> 29 Nicolas str, New York, 987597-50</li>
                  </ul>
                  <div className="social">
                    <a className="fb" href="#d">
                      <i className="fa-fw fab fa-facebook-f"></i>
                    </a>
                    <a className="twitter" href="#d">
                      <i className="fa-fw fab fa-twitter"></i>
                    </a>
                    <a className="insta" href="#d">
                      <i className="fa-fw fab fa-instagram"></i>
                    </a>
                    <a className="youtube" href="#d">
                      <i className="fa-fw fab fa-google-plus-g"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-us__center">
                  <h3>opening hours</h3>
                  <ul>
                    <li><span>Monday</span>: 9:00 – 19:00</li>
                    <li><span>Tuesday</span>: 9:00 – 19:00</li>
                    <li><span>Wednesday</span>: 9:00 – 19:00</li>
                    <li><span>Thursday</span>: 9:00 – 19:00</li>
                    <li><span>Friday</span>: 9:00 – 19:00</li>
                    <li><span>Saturday</span>: 11:00 – 16:00</li>
                    <li><span>Sunday</span>: CLOSED</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-us__right">
                  <form>
                    <div>
                      <label htmlFor="">your name</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label htmlFor="">your email</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label htmlFor="">your message</label>
                      <textarea type="text"></textarea>
                    </div>
                    <div className="text-center pt-4">
                      <button type="submit" className="primary-btn">
                        <span>submit</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <iframe title="d" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"></iframe>
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


