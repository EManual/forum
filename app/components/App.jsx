import React from 'react';

require('./App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.sessionToken = '';
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
