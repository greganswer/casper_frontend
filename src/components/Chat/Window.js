import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
  }

  handleChatWindowClose() {
    this.setState({ visible: false });
  }

  getMessages() {
    return [
      { id: 1, owner: 'bot', type: 'text', value: 'Hello there!' },
      {
        id: 2,
        owner: 'bot',
        type: 'text',
        value: 'Welcome to Casper. I am CasperBot. How may I assist you?',
      },
      { id: 3, owner: 'user', type: 'text', value: 'Hello CasperBot' },
    ];
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="Chat__Window">
        <Header onChatWindowClose={this.handleChatWindowClose} />
        <Main messages={this.getMessages()} />
        <Footer />
      </div>
    );
  }
}
