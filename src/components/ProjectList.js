import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const indiv = projects.map((project) => {
  return <ProjectItem name={project.name} about={project.about} technologies={project.technologies} />
  }
 )

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {indiv}
      </div>
    </div>
  );
}

export default ProjectList;
