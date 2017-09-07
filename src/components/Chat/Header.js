import React, { Component } from 'react';

export default class Header extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
  }

  /**
   * Close the Chat window
   * @return null
   */
  handleChatWindowClose(e) {
    this.props.onChatWindowClose();
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Window__Header">
        <span className="Chat__Window__title">Chat With CasperBot</span>
        <span className="right" onClick={ this.handleChatWindowClose }>
          <i className="material-icons">close</i>
        </span>
      </div>
    );
  }
}
