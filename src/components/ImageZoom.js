import React, { Component } from 'react'
import Logo from '../svg/logo'
import ImageBackground from './ImageBackground'
import './ImageZoom.css'

export default class ImageZoom extends Component {
  constructor(props) {
    const { url, title, description } = props.image
    const { images } = props
    let arrayPointer
    images.forEach((item, index) => {
      if (item.url === url) arrayPointer = index
    })
    super(props)
    this.state = {
      show: false,
      url,
      title,
      description,
      images,
      arrayPointer
    }
  }
  toggle = () => {
    this.setState({ show: !this.state.show })
  }
  nextImage = () => {
    const max = this.state.images.length - 1
    const newPointer =
      this.state.arrayPointer + 1 > max ? 0 : this.state.arrayPointer + 1
    this.setState({
      arrayPointer: newPointer,
      url: this.state.images[newPointer].url,
      title: this.state.images[newPointer].title,
      description: this.state.images[newPointer].description
    })
  }
  prevImage = () => {
    const max = this.state.images.length - 1
    const newPointer =
      this.state.arrayPointer - 1 < 0 ? max : this.state.arrayPointer - 1
    this.setState({
      arrayPointer: newPointer,
      url: this.state.images[newPointer].url,
      title: this.state.images[newPointer].title,
      description: this.state.images[newPointer].description
    })
  }
  render() {
    const { show, url, title, description, arrayPointer, images } = this.state
    return (
      <div key={`${title}-${url}`}>
        <ImageBackground
          onClick={this.toggle}
          className="project-bg-img"
          url={url}
        />
        {show && (
          <div>
            <div className="page-curtain center" />
            <div className="image-zoom center">
              <a onClick={this.nextImage}>next</a>
              <a onClick={this.prevImage}>prev</a>
              <h1 className="center fade-in one">{title}</h1>
              {description && <p>{description}</p>}
              <br />
              <img
                alt={`${title} - ${description}`}
                className="fade-in one zoom-img"
                width="80%"
                src={url}
              />
              <div className="image-zoom-place">
                ({arrayPointer + 1} of {images.length})
              </div>
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
