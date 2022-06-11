import React from "react";
import { projects } from "../static/projectData";
import "./Projects.css";
import Footer from "../Footer";

const Projects = () => {
  return (
    <div>
      <div className="top__container">
        <div className="projectForm__count" role="status">
          <span className="myname">kanghyew0n</span>
          <span className="projectForm__count__text">
            {"total: " + projects.length}
          </span>
        </div>
        <h2 className="maintitle">Project.zip</h2>
        <p className="subtitle">CodeStates에서 학습한 프로젝트입니다.</p>
      </div>
      <ul className="projects">
        {projects.map((project) => {
          return (
            <li className="project" id={project.id} key={project.id}>
              <div className="project__content">
                <div className="project__userInfo">
                  <span className="project__username">{project.username}</span>
                  <div className="component">
                    <span className="component__text"> {project.team}</span>
                  </div>
                </div>
                <div className="project__message">{project.content}</div>

                <span className="project__createdAt">{project.createdAt}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
