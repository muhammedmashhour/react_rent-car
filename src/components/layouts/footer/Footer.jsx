import React from 'react';


import './Footer.scss';

function Footer() {
  return (
    <section className="footer" style={{backgroundImage: `url('/imgs/foot-bg.png')`}}>
      <div className="footer__content">
        <a href="#d">
          <img src="/imgs/foot-logo.png" alt="" />
        </a>
        <p>Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.</p>
        <div className="footer__content__social">
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
      <div className="footer__copyright">
        &copy; All copy reserved!
      </div>
    </section>
  )
}

export default Footer
