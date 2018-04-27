import React, { Component } from 'react'
// import Submenu from './Submenu'
import './Work.css'
import projectsData from '../../data/projects'
import ListItemProjectView from '../../components/ListItemProject'

export default class Work extends Component {
  render() {
    return (
      <div className="projects content-fixed">
        <div className="project-list">
          {projectsData.map(project => (
            <ListItemProjectView project={project} key={`${project.name}`} />
          ))}
        </div>
      </div>
    )
  }
}
