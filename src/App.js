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
        <h2>Danni Baxter</h2>
        <NavBar />
        <div className="col-xs-10">
        { this.props.children &&
          React.cloneElement(this.props.children)
        }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
