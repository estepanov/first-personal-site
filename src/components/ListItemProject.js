import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ListItemProject.css'
import ImageBackground from './ImageBackground'
import BreakDownTags from './BreakDownTags'

class ListItemProject extends Component {
  render() {
    const { urlname, name, description, images, breakdown } = this.props.project
    const imagesToDisplay = images.slice(0, 4) // only show first 4 images
    if (!name) return <div />
    return (
      <Link className="list-item" to={`/projects/${urlname}`}>
        <h2>{name}</h2>
        <p>{description}</p>

        {breakdown &&
          breakdown.length &&
          breakdown.map(group => (
            <BreakDownTags key={group.title} breakdown={group} />
          ))}

        <div className="list-item-img-container">
          {imagesToDisplay &&
            imagesToDisplay.length &&
            imagesToDisplay.map(img => (
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
