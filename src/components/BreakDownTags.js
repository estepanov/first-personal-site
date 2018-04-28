import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BreakDownTags.css'

class BreakDownTags extends Component {
  render() {
    const { title, value } = this.props.breakdown
    if (!title) return <div />
    return (
      <div key={`${title}`} className="breakdown-container">
        <ul className="break-down-item-tags">
          <li>
            <h4 id="project-tags-title">{title}</h4>
          </li>
          {value.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    )
  }
}

export default BreakDownTags