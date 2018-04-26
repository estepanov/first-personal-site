import React, { Component } from 'react'
import './Work.css'

export default class Work extends Component {
  render() {
    return (
      <div className="projects content-fixed">
        <div className="project-item">
          <div className="project-item-header">
            <h1>Torrent.Report</h1>
            <p>I am still working on this site.</p>
          </div>
          <div className="project-item-footer">
            <b>Front-end & Back-end</b> Node, Express, React, React-Router,
            Webpack, Mocha
          </div>
        </div>
      </div>
    )
  }
}
