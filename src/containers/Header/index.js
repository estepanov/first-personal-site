import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../svg/logo.svg'
import name from '../../svg/name.svg'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="#home" className="logoLink">
          <img src={logo} style={{ height: 80 }} alt="logo" />
        </Link>
        <h1>
          <img style={{ width: 300 }} src={name} alt="evans stepanov" />
        </h1>
      </div>
    )
  }
}
