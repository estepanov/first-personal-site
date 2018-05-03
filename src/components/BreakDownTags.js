import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './BreakDownTags.css'

class BreakDownTags extends Component {
  goToTaggedProjects = tag => () =>
    this.props.history.push(`/projects/tag/${tag}`)

  render() {
    const { title, value } = this.props.breakdown
    const target = this.props.match.params.tag
    if (!title) return <div />
    return (
      <div className="breakdown-container">
        <ul className="break-down-item-tags">
          <li>
            <h4 id="project-tags-title">{title}</h4>
          </li>
          {value.map(tag => (
            <li
              key={tag}
              onClick={this.goToTaggedProjects(tag)}
              id={
                target &&
                target.trim().toLowerCase() === tag.trim().toLowerCase()
                  ? 'break-down-target'
                  : ''
              }
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(BreakDownTags)
