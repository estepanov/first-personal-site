import React, { Component } from 'react'
import Logo from '../svg/logo'
// import RightArrowHover from '../svg/arrows/RightArrowHover'
import RightArrow from '../svg/arrows/RightArrow'
// import LeftArrowHover from '../svg/arrows/LeftArrowHover'
import LeftArrow from '../svg/arrows/LeftArrow'
import './ImageZoom.css'

export default class ImageZoom extends Component {
  constructor(props) {
    super(props)
    const { url, title, description } = props.image
    const { images } = props
    let arrayPointer
    images.forEach((item, index) => {
      if (item.url === url) arrayPointer = index
    })
    this.state = {
      initial: true,
      currentUrl: url,
      currentTitle: title,
      currentDescription: description,
      images,
      arrayPointer
    }
  }

  nextImage = () => {
    const max = this.state.images.length - 1
    const newPointer =
      this.state.arrayPointer + 1 > max ? 0 : this.state.arrayPointer + 1
    this.setState({
      initial: false,
      arrayPointer: newPointer,
      currentUrl: this.state.images[newPointer].url,
      currentTitle: this.state.images[newPointer].title,
      currentDescription: this.state.images[newPointer].description
    })
  }

  prevImage = () => {
    const max = this.state.images.length - 1
    const newPointer =
      this.state.arrayPointer - 1 < 0 ? max : this.state.arrayPointer - 1
    this.setState({
      initial: false,
      arrayPointer: newPointer,
      currentUrl: this.state.images[newPointer].url,
      currentTitle: this.state.images[newPointer].title,
      currentDescription: this.state.images[newPointer].description
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyBindingController, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyBindingController, false)
  }

  keyBindingController = e => {
    e.preventDefault()
    switch (e.keyCode) {
      case 27:
        this.props.toggleVisabilityFunc()
        break
      case 37:
        this.prevImage() // left
        break
      case 38:
        this.prevImage() // up
        break
      case 39:
        this.nextImage() // right
        break
      case 40:
        this.nextImage() // down
        break
      default:
        break
    }
  }

  fadeInManaged = (fadeClasses, nonFadeClasses) => {
    return this.state.initial
      ? `${fadeClasses} ${nonFadeClasses}`
      : nonFadeClasses
  }

  render() {
    const {
      currentUrl,
      currentTitle,
      currentDescription,
      arrayPointer,
      images
    } = this.state
    return (
      <div>
        <a
          className={this.fadeInManaged(
            'fade-in one',
            'image-zoom-navigation image-zoom-navigation-right'
          )}
          onClick={this.nextImage}
        >
          <RightArrow height="40px" style={{ fill: 'white', opacity: 0.2 }} />
        </a>
        <a
          className={this.fadeInManaged(
            'fade-in one',
            'image-zoom-navigation image-zoom-navigation-left'
          )}
          onClick={this.prevImage}
        >
          <LeftArrow
            height="40px"
            style={{ fill: 'white', opacity: 0.2, transform: 'rotate(180deg)' }}
          />
        </a>
        <div className="page-curtain" />
        <div
          className="image-zoom center"
          onClick={this.props.toggleVisabilityFunc}
        >
          <h1 className={this.fadeInManaged('fade-in one', 'center')}>
            {currentTitle}
          </h1>
          {currentDescription && (
            <p className="image-zoom-desc">{currentDescription}</p>
          )}
          <br />
          <img
            alt={`${currentTitle} - ${currentDescription}`}
            className={this.fadeInManaged('fade-in one', 'zoom-img center')}
            src={currentUrl}
            onClick={this.props.toggleVisabilityFunc}
          />
          <div className="image-zoom-place center">
            {arrayPointer + 1} of {images.length}
          </div>
          <div className="image-zoom-hints center hidden-on-mobile">
            <b>HINT</b>
          </div>
          <div className="image-zoom-hints center hidden-on-mobile">
            Hit escape key or click anywhere except the arrow signs to close.
          </div>
          <div className="image-zoom-hints center hidden-on-mobile">
            You can also navigate all the images using your keyboard's
            arrowkeys.
          </div>

          <div className="logo-overlay center hidden-on-mobile">
            <Logo style={{ fill: '#ffffff' }} height="40" alt="logo" />
          </div>
        </div>
      </div>
    )
  }
}
