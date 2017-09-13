import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import botResponses from '../../../services/botResponses';
import quickReplies from '../../../services/quickReplies';
import allMessages from '../../../services/messages';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChatWindowClose: PropTypes.func.isRequired,
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
      isBotTyping: false,
      quickReplies: allMessages().length ? quickReplies() : this.getStarted(),
      messages: allMessages(),
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
   * Set the Get Started Quick Reply
   * @return {[type]} [description]
   */
  getStarted() {
    return [{ id: uuid.v1(), text: 'Get Started' }];
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
    messages.push({
      sender: { type: 'user' },
      recipient: { type: 'bot' },
      timestamp: Date.now(),
      message: {
        mid: uuid.v1(),
        text: input,
      },
    });
    this.setState({ messages, isBotTyping: true, quickReplies: [] });

    this.addBotResponses(input);
  }

  /**
   * Add the bot messages to the chat window
   * @param  {string} input the user input
   * @return {Promise} [description]
   */
  async addBotResponses(input) {
    const messages = this.state.messages;
    const response = await botResponses(input);

    response.data.forEach((item, index) => {
      const milliseconds = item.message.text.length * 20;
      messages.push(item);
      setTimeout(() => this.setState({ messages, isBotTyping: false }), milliseconds);

      if (messages[index + 1]) {
        this.setState({ isBotTyping: true });
      }
    });
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
