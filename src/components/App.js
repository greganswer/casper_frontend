import React, { Component } from 'react';
import '../css/App.css';
import '../libs/materialize';

import Header from './Header';
import ChatButton from './Chat/Button';
import ChatWindow from './Chat/Window';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ChatWindow />
        <ChatButton />
      </div>
    );
  }
}
