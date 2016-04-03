import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

require('./App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.sessionToken = '' 
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
