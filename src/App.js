import React, { Component } from 'react'
import logo from './svg/logo.svg'
import name from './svg/name.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {' '}
            <img style={{ width: 300 }} src={name} alt="evans stepanov" />
          </h1>
        </header>
        <p className="App-intro">
          "the hottest thing on the internet" - no one
        </p>
      </div>
    )
  }
}

export default App
