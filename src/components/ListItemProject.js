import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ListItemProject.css'
import ImageBackground from './ImageBackground'

class ListItemProject extends Component {
  render() {
    const {
      urlname,
      name,
      description,
      images,
      breakdown,
      links
    } = this.props.project
    if (!name) return <div />
    return (
      <Link className="list-item" to={`/projects/${urlname}`}>
        <h2>{name}</h2>
        <p>{description.slice(0, 200)}...</p>
        <div className="list-item-img-container">
          {images &&
            images.length &&
            images.map(img => (
              <ImageBackground
                key={`${img.url}-${img.title}`}
                className="list-item-mini-img"
                url={img.url}
              />
            ))}
        </div>
        <div className="list-item-breakdown-container">
          {breakdown &&
            breakdown.length &&
            breakdown.map(group => (
              <div key={`${group.title}`}>
                <ul className="project-list-item-tags">
                  <li>
                    <h4 id="project-tags-title">{group.title}</h4>
                  </li>
                  {group.value.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            ))}
        </div>
      </Link>
    )
  }
}

export default ListItemProject
