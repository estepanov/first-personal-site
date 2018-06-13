import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Name from './name'

import Logo from '../../svg/logo'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="logoLink">
          <Logo style={{ fill: '#515151' }} height="80" alt="logo" />
        </Link>
        <h1>
          <Link to="/" className="logoLink">
            <Name />
          </Link>
        </h1>
        <div className="nav-bar">
          <NavLink activeClassName="active-nav" to="/" exact>
            About
          </NavLink>
          {/*<NavLink to="/blog">Blog</NavLink>*/}
          <NavLink activeClassName="active-nav" to="/projects">
            Projects
          </NavLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/185O88kwJULDimHpPmTQAiy2zyiNUxRFt/view?usp=sharing"
          >
            Resume
          </a>
          <NavLink activeClassName="active-nav" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    )
  }
}
