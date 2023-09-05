import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../src/assets/ismail (2).jpeg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image no-cursor-style">
            <img src={img} alt="Mohammad Ismail Alam" />
          </div>
        </div>
        <div className="about__content rainbow">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>8 month Inter at Kona SL</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>9+ Completed Projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Recent Project</h5>
              <span>Gadget Labge</span>
              <h5 style={{ color: "var(--color-light)" }}>
                An Ecommerce Website
              </h5>
            </article>
          </div>
          <p>
            8 months experienced Front End Developer with hands-on experience in
            identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in writing application
            interface code via React JS and JavaScript workflows. Adept at
            monitoring and maintaining frontend performance and troubleshooting
            and debugging the same to bolster overall performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
