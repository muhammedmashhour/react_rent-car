import React, { Component } from 'react';

import Slider from "react-slick";

import './Home.scss';

class Home extends Component {
  render() {


    const ServicesSlider = {
      dots: false,
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
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-1.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-2.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-3.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-4.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-5.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-5.png" alt="dd" /></div>
              </div>
              <div className="brands__cards__item">
                <div><img src="http://efuel.like-themes.com/wp-content/uploads/2018/09/partner-new-5.png" alt="dd" /></div>
              </div>
            </Slider>
          </div>
        </section>
      </>
    )
  }
}

export default Home
