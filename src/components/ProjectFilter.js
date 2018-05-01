import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ProjectFilter.css'

export default class ProjectFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFilter: true
    }
  }
  toggleVisability = () =>
    this.setState({ ...this.state, showFilter: !this.state.showFilter })
  render() {
    const { tag, taggedProjects, projectsData } = this.props
    if (tag) {
      return (
        <div className="tag-current" key={tag}>
          <p>
            Currently showing{' '}
            {taggedProjects.length === 1
              ? 'one project'
              : `${taggedProjects.length} projects`}{' '}
            tagged
          </p>
          <b>{tag}</b>
          <Link to="/projects/" className="tag-button">
            clear filter
          </Link>
        </div>
      )
    } else {
      const allTags = projectsData.reduce((prev, curr) => {
        const currentTags = []
        curr.breakdown.forEach(group => {
          group.value.forEach(tag => {
            if (!prev.includes(tag)) currentTags.push(tag)
          })
        })
        return prev.concat(currentTags)
      }, [])
      return (
        <div className="proj-filter-container">
          {/*<div className="proj-filter-toggle" onClick={this.toggleVisability}>
              {this.state.showFilter ? 'hide filter' : 'show filter'}
      </div>*/}

          {this.state.showFilter && (
            <div className="tag-filter-list">
              {allTags.map(tag => (
                <Link key={tag} to={`/projects/tag/${tag}`}>
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }
  }
}
