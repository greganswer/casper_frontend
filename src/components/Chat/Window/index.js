import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import formatChatMessage from '../../../services/formatChatMessage';
import botResponses from '../../../services/botResponses';
import allMessages from '../../../services/messages';
import Utils from '../../../Utils';

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
    const messages = allMessages();
    const lastItem = _.last(messages);
    const quickReplies = lastItem ? lastItem.message.quick_replies : [];
    this.state = {
      isVisible: this.props.isOpen,
      isBotTyping: !messages.length,
      messages,
      quickReplies,
    };

    this.handleRemoveQuickReplies = this.handleRemoveQuickReplies.bind(this);
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  /**
   * Check if the window is open
   * @param  {Object} newProps The new properties being passed in
   * @return {void}
   */
  async componentWillReceiveProps(newProps) {
    this.setState({ isVisible: newProps.isOpen });

    if (newProps.isOpen && !this.state.messages.length) {
      await Utils.wait(3000);
      await this.addBotResponses(formatChatMessage('user', { text: 'Get Started' }));
    }
  }

  /**
   * Set the Get Started Quick Reply
   * @return {[type]} [description]
   */
  getStarted() {
    return [{ content_type: 'text', title: 'Get Started', payload: '' }];
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
   * Remove the quick_replies and set bot typing indicator.
   * @return {void}
   */
  handleRemoveQuickReplies() {
    this.setState({ isBotTyping: true, quickReplies: [] });
  }

  /**
   * Handle the user's input and empty the quickReplies
   * @param  {Object} input The user's input
   * @return {void}
   */
  handleUserInput(input) {
    const messages = this.state.messages;
    const formattedMessage = formatChatMessage('user', input);
    messages.push(formattedMessage);
    this.setState({ messages, isBotTyping: true, quickReplies: [] });
    this.addBotResponses(formattedMessage);
  }

  /**
   * Add the bot messages to the chat window
   * @param  {string} input the user input
   * @return {Promise} [description]
   */
  async addBotResponses(input) {
    const messages = this.state.messages;
    const response = await botResponses(input);
    const items = response.data;

    for (let i = 0; i < items.length; i++) {
      this.setState({ isBotTyping: true });
      await Utils.wait((i + 1) * 2000 + i * 2000);
      messages.push(items[i]);
      this.setState({
        messages,
        isBotTyping: !!response.data[i + 1],
        quickReplies: items[i].message.quick_replies,
      });
    }
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
          removeQuickReplies={this.handleRemoveQuickReplies}
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
