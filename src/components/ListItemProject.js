import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ListItemProject.css'
import Image from './Image'
import BreakDownTags from './BreakDownTags'

class ListItemProject extends Component {
  render() {
    const {
      urlname,
      name,
      description,
      images,
      breakdown,
      showcaseImageIds
    } = this.props.project
    const imagesToDisplay = showcaseImageIds.map(id => {
      for (let x = 0; x < images.length; x++) {
        if (images[x].id === id) return images[x]
      }
      return {}
    })
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
              <Image
                key={`${name}-${img.title}`}
                img={img}
                preview={true}
                className="list-item-mini-img"
              />
            ))}
        </div>
      </Link>
    )
  }
}

export default ListItemProject
