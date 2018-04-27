import React, { Component } from 'react'
import Logo from '../svg/logo'
import ImageBackground from './ImageBackground'
import './ImageZoom.css'

export default class ImageZoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  toggle = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    const { show } = this.state
    const { url, title, description } = this.props.image
    return (
      <div>
        <ImageBackground
          onClick={this.toggle}
          className="project-bg-img"
          url={url}
        />
        {show && (
          <div>
            <div className="page-curtain center" />
            <div onClick={this.toggle} className="image-zoom center">
              <h1 className="fade-in one">{title}</h1>
              {description && <p>{description}</p>}
              <br />
              <img
                alt={`${title} - ${description}`}
                className="fade-in one"
                width="80%"
                src={url}
              />
              <div className="logo-overlay center">
                <Logo style={{ fill: '#ffffff' }} height="40" alt="logo" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
