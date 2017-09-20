import React, { Component } from 'react';
import picture from '../public/Danni-Nicaragua.png';
import './App.css';
import initialState from './initialState';
import Resume from './components/Resume.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';

class App extends Component {
  constructor () {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <h1 className="header-name">Danni Baxter</h1>
        <NavBar />
        <div className="col-xs-12">
        { this.props.children &&
          React.cloneElement(this.props.children)
        }
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
