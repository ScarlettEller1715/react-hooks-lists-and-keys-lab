import React from "react";

function techList(technologies) {
  return technologies.map((tech) => {
    return <span key={tech}>{tech}</span>
  })}

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList(technologies)}
      </div>
    </div>
  );
}

export default ProjectItem;
