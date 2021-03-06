import React, { useState } from 'react';

import './Navbar.scss';

import { Link } from 'react-router-dom';

function Navbar(props) {
  console.log(props);

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <nav className="mini-navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="mini-navbar__contact">
            <a href="#d">
              <i className="fas fa-phone-square-alt"></i>
              <span>+080 618 16984</span>
            </a>
            <a href="#d">
              <i className="fas fa-envelope"></i>
              <span>info@gmail.com</span>
            </a>
            <div className="mini-navbar__contact__social">
              <span>follow us</span>
              <span className="nav-line"></span>
              <a href="#d">
                <i className="fa-fw fab fa-twitter"></i>
              </a>
              <a href="#d">
                <i className="fa-fw fab fa-facebook-f"></i>
              </a>
              <a href="#d">
                <i className="fa-fw fab fa-instagram"></i>
              </a>
              <a href="#d">
                <i className="fa-fw fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
          <div className="mini-navbar__user">
            <a href="#d">
              <i className="far fa-user-circle"></i>
              <span>login</span>
            </a>
            <a href="#d">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>

      
      <nav className="main-navbar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="main-navbar__logo">
              <a href="#d">
                <img src="/imgs/nav-logo.png" alt="" />
              </a>
            </div>
            <div className="main-navbar__links justify-content-end align-items-center">
              <ul className={`main-navbar__links__menu ${openSidebar === true ? 'active ' : ''}`}>
                <li className="close-sidebar">
                  <button onClick={() => openSidebar === true ? setOpenSidebar(false) : setOpenSidebar(true)}>
                    <i className="fas fa-times"></i>
                  </button>
                </li>
                <li className='main-navbar__links__menu__item'>
                  <Link className="main-navbar__links__menu__item__link" to="/">
                    home
                    <i className="fas fa-angle-down"></i>
                  </Link>
                </li>
                <li className='main-navbar__links__menu__item'>
                  <Link className="main-navbar__links__menu__item__link" to="/about">
                    about
                    <i className="fas fa-angle-down"></i>
                  </Link>
                </li>
                <li className='main-navbar__links__menu__item'>
                  <a className="main-navbar__links__menu__item__link" href="#services">
                    services
                    <i className="fas fa-angle-down"></i>
                  </a>
                </li>
                <li className='main-navbar__links__menu__item'>
                  <a className="main-navbar__links__menu__item__link" href="#blogs">
                    blogs
                    <i className="fas fa-angle-down"></i>
                  </a>
                </li>
                <li className='main-navbar__links__menu__item'>
                  <a className="main-navbar__links__menu__item__link" href="#plans">
                    plans
                    <i className="fas fa-angle-down"></i>
                  </a>
                </li>
                
                <li className='main-navbar__links__menu__item'>
                  <Link className="main-navbar__links__menu__item__link" to="/contact">
                    contact
                    <i className="fas fa-angle-down"></i>
                  </Link>
                </li>
              </ul>
              <button onClick={() => openSidebar === true ? setOpenSidebar(false) : setOpenSidebar(true)} className="collapse-sidebar" type="button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar