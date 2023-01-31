import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <div className="row project-container justify-content-around">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}

      </div>
    </div>
  );
}
