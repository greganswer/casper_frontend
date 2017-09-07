import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import quickReplies from '../../services/quickReplies';
import getMessages from '../../services/messages';
import getCards from '../../services/cards';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
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
      isVisible: this.props.isOpen,
      isBotTyping: true,
      quickReplies: quickReplies(),
      messages: getMessages(),
      cards: getCards(),
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
    this.setState({ isVisible: newProps.isOpen });
  }

  /**
   * Close the Chat window
   * @return {void}
   */
  handleChatWindowClose() {
    this.props.onChatWindowClose();
    this.setState({ isVisible: false });
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
    if (!this.state.isVisible) {
      return null;
    }

    return (
      <div className="Chat__Window">
        <Header onChatWindowClose={this.handleChatWindowClose} />
        <Main
          isBotTyping={this.state.isBotTyping}
          messages={this.state.messages}
          onUserInput={this.handleUserInput}
          quickReplies={this.state.quickReplies}
        />
        <Footer onUserInput={this.handleUserInput} />
      </div>
    );
  }
}

Window.propTypes = propTypes;
Window.defaultProps = defaultProps;

export default Window;
