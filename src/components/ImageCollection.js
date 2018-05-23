import React, { Component } from 'react'
import Image from './Image'
import ImageZoom from './ImageZoom'

export default class ImageCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showZoom: false,
      images: props.images,
      selectedImage: null
    }
  }
  toggle = imgObject =>
    this.setState({
      selectedImage: this.state.showZoom ? null : imgObject,
      showZoom: !this.state.showZoom
    })

  render() {
    const containerClassName = this.props.className
    const { preview } = this.props
    const { images, showZoom, selectedImage } = this.state
    if (images && images.length) {
      return (
        <div className={containerClassName}>
          {showZoom &&
            selectedImage && (
              <ImageZoom
                image={selectedImage}
                images={images}
                toggleVisabilityFunc={() => this.toggle()}
              />
            )}
          {images.map(img => (
            <Image
              preview={preview}
              key={`${img.url}-${img.title}`}
              onClick={() => this.toggle(img)}
              className={this.props.imageHolderClassName}
              img={img}
            />
          ))}
        </div>
      )
    } else {
      // no images provided
      return <div />
    }
  }
}
