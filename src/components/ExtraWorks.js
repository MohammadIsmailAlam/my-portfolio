import React, { useState } from "react";
import { IconButton, Icon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IMG1 from "../../src/assets/279862710-f0db01a6-9e4a-461c-ba7.jpg";
import IMG2 from "../../src/assets/madious1.png";
import IMG3 from "../../src/assets/repliq.png";
import IMG4 from "../../src/assets/lws.png";
import IMG5 from "../../src/assets/technext.PNG";

//ExtraWork function
const ExtraWork = () => {
  const [showProjects, setShowProjects] = useState(false); // State to control showing projects

  const handleDropdownClick = () => {
    setShowProjects(!showProjects);
  };
  const soloProjects = [
    {
      id: 1,
      title: "Ollyo Coding Test",
      img: IMG1,
      description:
        "Responsive image gallery using React JS with the following features: reordering, deleting multiple images, and setting a feature image.",
      technologies:
        "React Js | Tailwind CSS | React Hook From",
      link: "https://ollyo-gallery.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/ollyo-task",
    },
    {
      id: 2,
      title: "Mediusware Coding Test",
      img: IMG2,
      description:
        "There were two problems to solve. One is kind of TO-DO and another one is Data fetching from a api and to show data as requirements",
      technologies:
        "React Js | Material UI | Bootstrap | React-Router-Dom | React Hook From",
      link: "https://khuda-lagse.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Mediusware-codingTest",
    },
    {
      id: 3,
      title: "Reqile Coding Test",
      img: IMG3,
      description:
        "This site is a E-Commerce platform admin based. You can add items in to cart. Removed a cart item.",
      technologies: "React | Tailwind CSS",
      link: "https://reqile-coding-test.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Reqile-Coding-Test",
    },
    {
      id: 4,
      title: "Learn With Sumit Coding test",
      img: IMG4,
      description: "URL shorter web application",
      technologies: "React | React Hooks | Tailwind CSS",
      link: "https://lws-url-shortener-task.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/LWS_url-shortener_task",
    },
    {
      id: IMG5,
      title: "Technext Coding test",
      img: IMG5,
      description: "Fatched data from api, search and sort by date, sucesses and faliour",
      technologies: "React | React Hooks | Context | React States",
      link: "https://technext-test.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Technext-test",
    },
  ];

  return (
    <section id="portfolio">
      <div className="dropdown-button" onClick={handleDropdownClick}>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#4db5ff",
          }}
        >
          Extra
          <IconButton
            style={{ color: "#4db5ff" }}
            aria-label="dropdown"
            size="small"
          >
            <Icon>
              <ExpandMoreIcon />
            </Icon>
          </IconButton>
        </h2>
      </div>
      {showProjects && (
        <>
          <h2>Attempted few Coding tests</h2>
          <div className="container portfolio__container rainbow">
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
        </>
      )}
    </section>
  );
};

export default ExtraWork;
