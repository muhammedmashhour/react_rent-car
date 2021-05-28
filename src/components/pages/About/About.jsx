import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Contact from '../../partials/contact/Contact';

import Brands from './../../partials/brands/Brands';

import Advantages from '../../partials/advantages/Advantages';

import './About.scss';

export default class About extends Component {
  render() {



    return (
      <>
        <section className="about-header" style={{backgroundImage: `url('/imgs/custom-header.jpg')`}}>
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
                  <img src="/imgs/about.jpg" alt="header img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Advantages />
        <Brands />
        <Contact />
      </>
    )
  }
}


