import React from "react";
import "./Projects.scss";
import projectData from "./projectData";
import ProjectsContent from "./ProjectsContent";

function Projects() {

  const data = projectData.map(item => {
    return (
      <ProjectsContent
        key={item.altName}
        projectImg={item.projectImg}
        altName={item.altName}
        preview={item.preview}
        github={item.github}
      ></ProjectsContent>
    );
  });

  return (
    <div id="projects">
      <div className="header-content">
        <h2 className="header-content-title">Projects</h2>
      </div>
      <div className="projects-content">{data}</div>
    </div>
  );
}

export default Projects;
