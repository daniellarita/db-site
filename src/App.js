import React, { Component } from 'react';
import picture from '../public/Danni-Nicaragua.png';
import './App.css';
import initialState from './initialState';
import Resume from './components/Resume.js';
import NavBar from './components/NavBar.js';
import Contact from './components/Contact.js';

class App extends Component {
  constructor () {
    super();
    this.state = initialState;
  }
  
  render() {
    console.log(this.props.children)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Danni Baxter</h2>
          <NavBar />
        </div>
        <div className="col-xs-10">
        { this.props.children &&
          React.cloneElement(this.props.children)
        }
        </div>
      </div>
    );
  }
}

export default App;
