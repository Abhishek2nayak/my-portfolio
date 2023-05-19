import React from "react";
import "./index.css";

import sunnysideImg from "./../resource/project-img/sunnyside.jpg";
import todoAppImg from "./../resource/project-img/p-todo.png";
import randomQuoteImg from "./../resource/project-img/randomQuote.png";

const Projects = () => {
  return (
    <>
      <center>
        <h1 className="header-title">.Projects</h1>
      </center>

      <div className="projects-container">
        <ProjectCard
          imgUrl={sunnysideImg}
          title={"SunnySide Landing Page"}
          teckStack={"HTML,CSS"}
          webUrl={`https://abhishek-nayak-sunnyside.netlify.app/`}
          githubUrl={`https://github.com/Abhishek2nayak/sunnyside-landing-page`}
        />
        <ProjectCard
          imgUrl={todoAppImg}
          title={"To Do App"}
          teckStack={"HTML,CSS,Javascript"}
          webUrl={`https://abhishek2nayak.github.io/todo-list.github.io/`}
          githubUrl={`https://github.com/Abhishek2nayak/todo-list.github.io`}
        />
        <ProjectCard
          imgUrl={randomQuoteImg}
          title={"Random Quote Generator"}
          teckStack={"HTML,CSS,Javascript"}
          webUrl={`https://abhishek2nayak.github.io/quote-generator.github.io/`}
          githubUrl={`https://github.com/Abhishek2nayak/quote-generator.github.io`}
        />
      </div>
    </>
  );
};

const ProjectCard = ({ imgUrl, title, teckStack, webUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={imgUrl} alt="" />
      <div className="project-info">
        <h2>{title}</h2>
        <p className="tech-stack">{teckStack}</p>
        <div className="project-links">
          <a href={webUrl}>
            Live <i class="fa-solid fa-globe" alt={title} target="_blank"></i>
          </a>
          <a href={githubUrl}>
            Github <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
