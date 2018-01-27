import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resume from './components/Resume';
import About from './components/About';
import Travel from './components/Travel';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRedirect to="/about"/>
  		<Route path="/about" component={ About } />
  		<Route path="/travel" component={ Travel } />
  	</Route>
  </Router>,
  document.getElementById('root')
);
