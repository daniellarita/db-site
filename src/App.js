import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import initialState from './initialState';
import Resume from './components/Resume.js';
import Sidebar from './components/Sidebar.js';

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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Danni's Site</h2>
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
