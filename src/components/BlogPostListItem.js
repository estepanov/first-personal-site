import React, {Component} from 'react'

import './BlogPostListItem.css'

export default class BlogPostListItem extends Component {
  render() {
    const {title, date, body} = this.props.post
    return (
      <div className="blog-post-list-item">
        <h3>{title}</h3>
        <b>{date.getYear()}
          / {date.getMonth()}</b>
        <p>{body.slice(0, 200)}...</p>
      </div>
    )
  }
}
