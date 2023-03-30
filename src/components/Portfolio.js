import React from "react";
import IMG1 from "../../src/assets/khuda-lagse.png";
import IMG2 from "../../src/assets/Feedback.png";
import IMG3 from "../../src/assets/snake.png";
// import IMG4 from "../../assets/Covid-19 Project.jpg";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Khuda-lagse with React.js",
      img: IMG1,
      description:
        "An treat given website is a huge interactive platform to present various treats for people.",
      technologies: "Html | CSS | React Js | Material UI | Bootstrap | React-Router-Dom | React Hook From",
      link: "https://khuda-lagse.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Treat-Managment-System",
    },
    {
      id: 2,
      title: "FeedBack Plot App",
      img: IMG2,
      description:
        "This site is a kind of social media platform. You can collect feedbacks and share your feedback.",
      technologies: "React | Redux",
      link: "https://react-redux-project-sage.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/react-redux-project",
    },
    {
      id: 3,
      title: "Snake Game",
      img: IMG3,
      description: "",
      technologies: "React",
      link: "https://snake-game-silk-zeta.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Snake-Game",
    },
    {
      id: 4,
      title: "Blog Project",
    //   img: IMG3,
      description: "Create a blog, Store your data",
      technologies: "React",
      link: "",
      github: "https://github.com/MohammadIsmailAlam/react-app",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
