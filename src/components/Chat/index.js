import React, { Component } from 'react';
import Button from './Button';
import Window from './Window';

const propTypes = {};
const defaultProps = {};

/**
 * The Chat container component
 * @type {React.Component}
 */
class Chat extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = { isWindowOpen: false };
    this.handleWindowOpen = this.handleWindowOpen.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
  }

  /**
   * Open the Chat window
   * @return {void}
   */
  handleWindowOpen() {
    this.setState({ isWindowOpen: true });
  }

  /**
   * Close the Chat window
   * @return {void}
   */
  handleWindowClose() {
    this.setState({ isWindowOpen: false });
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat">
        <Window isOpen={this.state.isWindowOpen} onChatWindowClose={this.handleWindowClose} />
        <Button isVisible={!this.state.isWindowOpen} onChatWindowOpen={this.handleWindowOpen} />
      </div>
    );
  }
}

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

export default Chat;
