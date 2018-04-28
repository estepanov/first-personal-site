import React, { Component } from 'react'
import './FullProjectView.css'
import ImageZoom from './ImageZoom'
import BreakDownTags from './BreakDownTags'
import marked from 'marked'

const MarkDown = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
}

class FullProjectView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      name,
      readme,
      description,
      images,
      breakdown,
      links
    } = this.props.project
    if (!name) return <div />

    return (
      <div className="project-item">
        <div className="project-item-header">
          <h1>{name}</h1>
          {description && <p>{description}</p>}
          <div className="project-item-link">
            {links &&
              links.length &&
              links.map(link => (
                <a key={link.title} href={link.href}>
                  {link.title}
                </a>
              ))}
          </div>
          {readme && <MarkDown content={readme} />}
        </div>
        <div className="project-item-footer">
          {breakdown &&
            breakdown.length &&
            breakdown.map(group => <BreakDownTags breakdown={group} />)}
        </div>
        <div className="project-item-images">
          {images &&
            images.length &&
            images.map(img => <ImageZoom images={images} image={img} />)}
        </div>

        <div className="project-item-link-large">
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
