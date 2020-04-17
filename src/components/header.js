import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => (
  <header>
    <section id="header">
      <div className="container">
        <div className="u-center-text">
          <div className="hi">Hello I'm</div>
          <h2>Carlos Ocejo</h2>
          <h5 className="u-mlt-sm u-ml-sm">Software Developer</h5>
          <br />
          <a
            className="social-btn social-btn-mail"
            href="https://www.linkedin.com/in/car-oj"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-btn social-btn-mail"
            href="https://github.com/devil-geek"
          >
            <FaGithub />
          </a>
          <a
            className="social-btn social-btn-mail"
            href="mailto:car.oj@hotmail.com?subject=Contact"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
