import React, {Component} from 'react'
import './BlogPostList.css'

import BlogPostListItem from './BlogPostListItem'

export default class BlogPostList extends Component {
  render() {
    const {posts} = this.props
    if (!posts) 
      return <div/>
    return (
      <div className="blog-post-list">
        {posts.map(post => <BlogPostListItem key={post.title} post={post}/>)}
      </div>
    )
  }
}
