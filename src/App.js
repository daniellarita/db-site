import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header-name">Danni Baxter</h1>
        <NavBar />
        <div className="body">
        { this.props.children &&
          React.cloneElement(this.props.children)
        }
        <Footer />
        </div>
      </div>
    );
  }
}

export default App
