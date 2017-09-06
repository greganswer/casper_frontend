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

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="Chat__Window">
        <Header onChatWindowClose={this.handleChatWindowClose} />
        <Main />
        <Footer />
      </div>
    );
  }
}
