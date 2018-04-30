import React, { Component } from 'react'
import axios from 'axios'
import './Blog.css'

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      user: {}
    }
  }
  componentDidMount = () => {
    this.fetchPosts()
  }
  fetchPosts = () => {
    axios
      .get('https://medium.com/feed/@evans.stepanov')
      .then(res => res.data)
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h1>my blog</h1>
        <p>I am still working on this site.</p>
      </div>
    )
  }
}
