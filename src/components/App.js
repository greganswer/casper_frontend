import React, { Component } from 'react';
import '../css/App.css';
import '../libs/materialize';

import Header from './Header';
import Chat from './Chat';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    return (
      <div>
        <Header />
        <Chat />
      </div>
    );
  }
}
