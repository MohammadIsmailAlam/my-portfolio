import React from 'react';
import CTA from '../assets/CTA';
import HeaderSocials from '../assets/HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammad Ismail Alam</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <h5 className="text-light">React JS</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
