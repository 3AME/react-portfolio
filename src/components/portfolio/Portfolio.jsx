import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/dailyLifeInTampere.png";
import IMG8 from "../../assets/ChineseRecipes.png"

const data = [
  
  {
    id: 1,
    image: IMG2,
    title: "Understanding Algorithms (ethical challenges and trust in digitality)",
    github: "#",
    demo: "https://www.figma.com/proto/hnIBtfsObyv49cMTpb4zAX/Prototype-YLE?page-id=0%3A1&node-id=2%3A5&viewport=186%2C347%2C0.28&scaling=scale-down&starting-point-node-id=2%3A5",
  },
  {
    id: 2,
    image: IMG4,
    title: "Activities around you",
    github: "#",
    demo: "https://www.figma.com/proto/nvxof2P90dbVfs80clRs8N/hti110-group-work?page-id=103%3A233&node-id=205%3A2762&viewport=198%2C160%2C0.22&scaling=scale-down&starting-point-node-id=205%3A2762",
  },
  {
    id: 3,
    image: IMG3,
    title: "Design of everyday behavior",
    github: "#",
    demo: "https://medium.com/@team.jall",
  },
];

const data1 = [
  {
    id: "id1",
    image: IMG5,
    title: "Algorithm-based search for optimal delivery routes",
    github: "https://github.com/3AME/new_Delivery",
    demo: "#",
  },
  {
    id: "id2",
    image: IMG6,
    title: "New epidemic data analysis",
    github: "https://github.https://github.com/3AME/new-epidemic-data-analysis",
    demo: "#",
  },
  

]
const data2 = [
  {
    id: "gd1",
    image: IMG7,
    title: "Daily life in Tampere",
    github: "https://github.com/3AME/daily-life-in-tampere",
    demo: "https://anfang-daily-life-in-tampere.vercel.app/",
  },
  {
    id: "gd2",
    image: IMG8,
    title: "Chinese recipes for a friend",
    github: "https://github.com/3AME/lbs-birthday-recipes",
    demo: "https://lbs-birthday-recipes.vercel.app/",
  },
  {
    id: "gd3",
    image: IMG1,
    title:
      "Portfolio created by React",
    github: "https://github.com/3AME/react-portfolio",
    demo: "https://anfang-react-portfolio.vercel.app/",
  },
  
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* github + demo */}
        {data2.map(({ id, image, title, github, demo }) => {
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
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo/Website
                </a>
              </div>
            </article>
          );
        })}
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
        {/* Github*/}
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
