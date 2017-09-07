import React, { Component, PropTypes } from 'react';

/**
 * The Chat window is broken up into 3 sections: Header, Main, Footer
 * @type {React.Component}
 */
export default class Header extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
  }

  /**
   * Close the Chat window
   * @return {void}
   */
  handleChatWindowClose() {
    this.props.onChatWindowClose();
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Window__Header">
        <span className="Chat__Window__title">Chat With CasperBot</span>
        <span className="right" role="button" tabIndex="0" onClick={ this.handleChatWindowClose }>
          <i className="material-icons">close</i>
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  onChatWindowClose: PropTypes.func.isRequired,
};
