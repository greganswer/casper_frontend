import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import quickReplies from '../../services/quickReplies';
import getMessages from '../../services/messages';

const propTypes = {
  isWindowOpen: PropTypes.bool.isRequired,
};

const defaultProps = {};

/**
 * The Chat Window
 * @type {React.Component}
 */
class Window extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.isWindowOpen,
      isBotTyping: true,
      quickReplies: quickReplies(),
      messages: getMessages(),
    };
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  /**
   * Check if the window is open
   * @param  {Object} newProps The new properties being passed in
   * @return {void}
   */
  componentWillReceiveProps(newProps) {
    this.setState({ visible: newProps.isWindowOpen });
  }

  /**
   * Close the Chat window
   * @return {void}
   */
  handleChatWindowClose() {
    this.setState({ visible: false });
  }

  /**
   * Handle the user's input and empty the quickReplies
   * @param  {string} input The user's input
   * @return {void}
   */
  handleUserInput(input) {
    const messages = this.state.messages;
    messages.push(this.processUserInput(input));
    this.setState({ messages, quickReplies: [] });
  }

  /**
   * Process the user's input
   * NOTE: this is temporary until the chatbot API is complete
   * TODO: Finish chatbot API
   * @param  {string} input The user's input
   * @return {void}
   */
  processUserInput(input) {
    const id = this.state.messages.length + 1;

    return { id, owner: 'user', type: 'text', text: input };
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="Chat__Window">
        <Header onChatWindowClose={this.handleChatWindowClose} />
        <Main
          isBotTyping={this.state.isBotTyping}
          messages={this.state.messages}
          quickReplies={this.state.quickReplies}
          onUserInput={this.handleUserInput}
        />
        <Footer onUserInput={this.handleUserInput} />
      </div>
    );
  }
}

Window.propTypes = propTypes;
Window.defaultProps = defaultProps;

export default Window;
