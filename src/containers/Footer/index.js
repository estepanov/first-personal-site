import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    const date = new Date()
    const year = date.getFullYear()
    return <div className="footer">&copy; {year} evans stepanov</div>
  }
}
