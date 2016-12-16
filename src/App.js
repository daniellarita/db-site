import React, { Component } from 'react';
import picture from '../public/Danni-Nicaragua.png';
import './App.css';
import initialState from './initialState';
import Resume from './components/Resume.js';
import Sidebar from './components/Sidebar.js';
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
          <img src={picture} className="App-logo" alt="logo" />
          <h2>Danni Baxter</h2>
        </div>
        <div className="col-xs-2">
          <Sidebar isActive={ this.props.router.isActive }/>
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
