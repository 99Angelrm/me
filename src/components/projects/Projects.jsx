import React from 'react'
import { getProjects } from '../../helpers/getProjects'
import Project from './Project'

const Projects = () => {
  const projects = getProjects();
  return (
    <div className='projects__projects-grid'>
      {
        projects.map(project =>(
          <Project key={project.title} {...project}/> 
        ))
      }
    </div>
  )
}

export default Projects