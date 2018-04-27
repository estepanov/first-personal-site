import React, { Component } from 'react'
import './FullProjectView.css'
import ImageZoom from './ImageZoom'

class FullProjectView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { name, description, images, breakdown, links } = this.props.project
    if (!name) return <div />
    return (
      <div className="project-item">
        <div className="project-item-header">
          <h1>{name}</h1>
          {description && <p>{description}</p>}
        </div>
        <div className="project-item-images">
          {images &&
            images.length &&
            images.map(img => (
              <ImageZoom key={`${img.title}-${img.url}`} image={img} />
            ))}
        </div>
        <div className="project-item-footer">
          {breakdown &&
            breakdown.length &&
            breakdown.map(group => (
              <div key={`${group.title}`}>
                <h3>{group.title}</h3>
                <ul className="project-tags">
                  {group.value.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            ))}
        </div>
        <div className="project-item-link">
          {links &&
            links.length &&
            links.map(link => (
              <a key={link.title} href={link.href}>
                {link.title}
              </a>
            ))}
        </div>
      </div>
    )
  }
}

export default FullProjectView
