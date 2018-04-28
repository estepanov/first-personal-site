import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ListItemProject.css'
import ImageBackground from './ImageBackground'
import BreakDownTags from './BreakDownTags'

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
        <p>{description}</p>

        {breakdown &&
          breakdown.length &&
          breakdown.map(group => <BreakDownTags breakdown={group} />)}
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
      </Link>
    )
  }
}

export default ListItemProject
