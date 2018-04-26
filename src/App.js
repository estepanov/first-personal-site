import React, { Component } from 'react'
import Routes from './Routes'
import Header from './containers/Header'
import Footer from './containers/Footer'
import './App.css'
import './MobileApp.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-line-bar" />
        <Header />
        <div className="content">
          <Routes />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
