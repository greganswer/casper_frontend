import React, { Component } from 'react';

export default class Header extends Component {
  handleChatWindowClose(e) {
    // TODO: Close Chat Window
  }

  render() {
    return (
      <div className="purple darken-3 Chat__Window__Header">
        <span className="Chat__Window__title">Chat With CasperBot</span>
        <span className="right" onClick={e => this.handleChatWindowClose(e)}>
          <i className="material-icons">close</i>
        </span>
      </div>
    );
  }
}
