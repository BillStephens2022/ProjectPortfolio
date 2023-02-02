import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="col-lg-2 col-md-5 col-sm-6 card m-2 mb-4 text-black bg-light">
      <div className="card-image bg-danger">
      <img
        src={`${process.env.PUBLIC_URL}/images/${project.image1}`}
        className="card-img-top"
        alt="project pic"
      />
      </div>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.desc}</p>
      </div>
      <div className="card-body">
      {project.deployedUrl !== "N/A" 
        ?
        <a href={project.deployedUrl} className="btn card-link text-black button-link">
        <i className="fas fa-link"></i>
          Deployed App
        </a>
        :
        null
      }
        
        <a href={project.deployedUrl} className="btn card-link text-black button-link">
        <i className="fab fa-github"></i>
          Github Repo
        </a>
        

      </div>
    </div>
  );
}
