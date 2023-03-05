import project01 from "../img/projects/01.jpg";
import project02 from "../img/projects/02.jpg";
import project01Big from "../img/projects/01-big.jpg";
import project02Big from "../img/projects/02-big.jpg";
import project03 from "../img/projects/03.jpg";
import project03Big from "../img/projects/03-big.jpg";

const projects = [
  {
    title: "Social Network",
    skills: "React, Redux, Axios",
    img: project01,
    imgBig: project01Big,
    gitHubLink: "https://github.com/Sok0l/kamasutra",
  },
  {
    title: "TODOS",
    skills: "React, Styled Components, Redux, graphQL, nodeJs, Express",
    img: project02,
    imgBig: project02Big,
    gitHubLink: null,
  },
  {
    title: "Portfolio",
    skills: "JS, CSS, HTML",
    img: project03,
    imgBig: project03Big,
    gitHubLink: "https://sok0l.github.io/portfolio-rss/",
  },
];

export { projects };
