import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  
  {
    id: 1,
    image: IMG2,
    title: "Understanding Algorithms (ethical challenges and trust in digitality)",
    github: "#",
    demo: "https://www.figma.com/proto/hnIBtfsObyv49cMTpb4zAX/Prototype-YLE?page-id=0%3A1&node-id=2%3A5&viewport=186%2C347%2C0.28&scaling=scale-down&starting-point-node-id=2%3A5",
  },
  {
    id: 1,
    image: IMG3,
    title: "Design of everyday behavior",
    github: "#",
    demo: "https://medium.com/@team.jall",
  },
  {
    id: 1,
    image: IMG4,
    title: "Activities around you",
    github: "#",
    demo: "https://www.figma.com/proto/nvxof2P90dbVfs80clRs8N/hti110-group-work?page-id=103%3A233&node-id=205%3A2762&viewport=198%2C160%2C0.22&scaling=scale-down&starting-point-node-id=205%3A2762",
  },
  
];

const data1 = [
  {
    id: 1,
    image: IMG1,
    title:
      "Portfolio created by React",
    github: "https://github.com/3AME/react-portfolio",
    demo: "#",
  },
  {
    id: 1,
    image: IMG5,
    title: "Algorithm-based search for optimal delivery routes",
    github: "https://github.com/3AME/new_Delivery",
    demo: "#",
  },
  {
    id: 1,
    image: IMG6,
    title: "New epidemic data analysis",
    github: "https://github.https://github.com/3AME/new-epidemic-data-analysis",
    demo: "#",
  },

]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Only demo */}
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn" target="_blank">
                  Github
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/* Github + demo */}
        {data1.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
