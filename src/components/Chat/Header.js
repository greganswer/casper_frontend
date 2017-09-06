import React, { Component } from 'react';

export default class Header extends Component {
  handleChatWindowClose(e) {
    this.props.onChatWindowClose();
  }

  render() {
    return (
      <div className="Chat__Window__Header">
        <span className="Chat__Window__title">Chat With CasperBot</span>
        <span className="right" onClick={e => this.handleChatWindowClose(e)}>
          <i className="material-icons">close</i>
        </span>
      </div>
    );
  }
}