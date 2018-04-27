import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ListItemProject.css'

class ListItemProject extends Component {
  render() {
    const {
      urlname,
      name,
      description,
      images,
      breakdown,
      links
    } = this.props.project
    if (!name) return <div />
    return (
      <Link className="list-item" to={`/projects/${urlname}`}>
        <h3>{name}</h3>
        <p>{description.slice(0, 100)}...</p>
      </Link>
    )
  }
}

export default ListItemProject
