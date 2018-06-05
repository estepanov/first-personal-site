import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    const date = new Date()
    const year = date.getFullYear()
    return (
      <div className="footer">
        <div className="footer-links">
          <a href="https://github.com/estepanov">GitHub</a>
          <a href="https://www.linkedin.com/in/evansstepanov/">LinkedIn</a>
        </div>
        <div className="footer-links">
          <a href="https://angel.co/evans-alexis-stepanov">AngelList</a>
          <a href="https://twitter.com/evans_stepanov">Twitter</a>
        </div>
        <p>&copy; {year}</p>
      </div>
    )
  }
}
