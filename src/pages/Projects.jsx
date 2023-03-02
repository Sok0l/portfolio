import React from "react";
import { Project } from "../components/Project/Project";
import { projects } from "../helpers/projectsList";

export const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project) => {
            return (
              <Project
                key={project.img}
                title={project.title}
                img={project.img}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};
