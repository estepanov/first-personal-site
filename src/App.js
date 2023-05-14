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
        <div style={{
          backgroundColor:'#f7f7f7',
          padding: "10px 0px",
          width: "100%",
        }}>
          <div style={{
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
              display:"flex",
          }}>
            <div style={{paddingRight: 10}}>

          <div style={{ fontWeight: "bold"}}>Attention</div>
          <div>This old personal site of mine is no longer maintained. I only keep it up for demo purposes.</div>
          <div>All backend functionality is now mocked client side to simplify maintenance.</div>
            </div>
            <div>
            <div><a 
            href='https://builtbyevans.com/'
            style={{
            marginTop: "10px",
            display: "inline-flex",
            padding: "8px 12px",
            backgroundColor: "black",
            borderRadius: "10px",
            color: "white"
          }}>View current site</a></div>
            </div>
          </div>
        </div>
        <div className="top-line-bar">&nbsp;</div>
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
