import React from 'react';

import 'main';

import './Footer.scss';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <a href="#d">
          <img src="http://efuel.like-themes.com/wp-content/uploads/2018/08/logo-footer.png" alt="" />
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
        created by doda!
      </div>
    </section>
  )
}

export default Footer
