import React, { Component } from 'react'
import { Animated } from 'react-web-animation'
import NameSVG from '../../svg/name'

export default class Name extends Component {
  getKeyFrames() {
    return [
      { transform: 'scale(1.6)', opacity: 0, offset: 0 },
      { transform: 'scale(1.2)', opacity: 0.3, offset: 0.3 },
      { transform: 'scale(1)', opacity: 1, offset: 1 }
    ]
  }

  getTiming(duration) {
    return {
      duration,
      easing: 'ease-in-out',
      delay: 0,
      iterations: 1,
      direction: 'alternate',
      fill: 'forwards'
    }
  }

  render() {
    return (
      <Animated.div
        keyframes={this.getKeyFrames()}
        timing={this.getTiming(2500)}
      >
        <NameSVG style={{ fill: '#515151' }} width="250" alt="evans stepanov" />
      </Animated.div>
    )
  }
}
