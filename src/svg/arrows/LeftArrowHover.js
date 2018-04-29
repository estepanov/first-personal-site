import React, { Component } from 'react'
import { Animated } from 'react-web-animation'
import LeftArrow from './LeftArrow'

export default class Name extends Component {
  getKeyFrames() {
    return [
      { transform: 'translateX(0)', opacity: 0.1, offset: 0 },
      { transform: 'translateX(10px)', opacity: 0.5, offset: 1 }
    ]
  }

  getTiming(duration) {
    return {
      duration,
      easing: 'ease-in-out',
      delay: 0,
      iterations: Infinity,
      direction: 'alternate',
      fill: 'forwards'
    }
  }

  render(props) {
    return (
      <Animated.div
        height={this.props.height}
        keyframes={this.getKeyFrames()}
        timing={this.getTiming(2500)}
      >
        <LeftArrow
          style={this.props.style}
          height={this.props.height}
          alt="evans stepanov"
        />
      </Animated.div>
    )
  }
}
