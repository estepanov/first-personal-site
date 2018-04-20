import React, { Component } from 'react'
import './Home.css'
import SVG from '../../components/SVG'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>welcome</h1>
          <p>I am still working on this site.</p>
          <p>
            Here is a fun button for you to play with while you wait: <SVG />
          </p>
        </div>
      </div>
    )
  }
}
