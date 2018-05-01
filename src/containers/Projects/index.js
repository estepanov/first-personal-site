import React, { Component } from 'react'
// import Submenu from './Submenu'
import './Work.css'
import projectsData from '../../data/projects'
import searchAllTags from '../../utils/searchAllTags'
import ListItemProjectView from '../../components/ListItemProject'
import ProjectFilter from '../../components/ProjectFilter'
export default class Work extends Component {
  render() {
    const { tag } = this.props.match.params
    let taggedProjects = []
    if (tag) taggedProjects = searchAllTags(projectsData, tag)

    return (
      <div className="projects content-fixed">
        <ProjectFilter
          tag={tag}
          taggedProjects={taggedProjects}
          projectsData={projectsData}
        />
        <div className="project-list">
          {tag
            ? taggedProjects.map(project => (
                <ListItemProjectView
                  project={project}
                  key={`${project.name}`}
                />
              ))
            : projectsData.map(project => (
                <ListItemProjectView
                  project={project}
                  key={`${project.name}`}
                />
              ))}
        </div>
      </div>
    )
  }
}
