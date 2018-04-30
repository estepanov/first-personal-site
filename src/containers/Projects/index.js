import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Submenu from './Submenu'
import './Work.css'
import projectsData from '../../data/projects'
import ListItemProjectView from '../../components/ListItemProject'

export default class Work extends Component {
  searchAllTags = (arr, target) => {
    return arr.filter(project => {
      let show = false
      project.breakdown.forEach(group => {
        console.log('group', group.title)
        group.value.forEach(tag => {
          if (tag.toLowerCase().trim() === target.toLowerCase().trim())
            show = true
        })
      })
      return show
    })
  }
  render() {
    const { tag } = this.props.match.params
    console.log('tag', tag)
    if (tag) console.log('taggggg', this.searchAllTags(projectsData, tag))
    const allTags = projectsData.reduce((prev, curr) => {
      const currentTags = []
      curr.breakdown.forEach(group => {
        group.value.map(tag => {
          if (!prev.includes(tag)) currentTags.push(tag)
        })
      })
      return prev.concat(currentTags)
    }, [])
    return (
      <div className="projects content-fixed">
        {tag ? (
          <div className="tag-current">
            currently showing projects tagged <b>{tag}</b>
            <Link to="/projects/" className="tag-button">
              remove filter
            </Link>
          </div>
        ) : (
          <div className="tag-filter-list">
            {allTags.map(tag => <Link to={`/projects/tag/${tag}`}>{tag}</Link>)}
          </div>
        )}
        <div className="project-list">
          {tag
            ? this.searchAllTags(projectsData, tag).map(project => (
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
