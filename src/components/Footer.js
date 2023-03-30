import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo"> Mohammad Ismail Alam</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/mohammad-ismail-alam-859504233/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/MohammadIsmailAlam" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2023. All rights reserved By Mohammad Ismail Alam.</small>
      </div>
    </footer>
  )
}

export default Footer