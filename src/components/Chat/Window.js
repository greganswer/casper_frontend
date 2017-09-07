import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import quickReplies from '../../services/quickReplies';
import messages from '../../services/messages';

export default class Window extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.isWindowOpen,
      isBotTyping: true,
      quickReplies: quickReplies(),
      messages: messages(),
    };
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  /**
   * Check if the window is open
   * @param  {Object} newProps The new properties being passed in
   * @return null
   */
  componentWillReceiveProps(newProps) {
    this.setState({ visible: newProps.isWindowOpen });
  }

  /**
   * Close the Chat window
   * @return null
   */
  handleChatWindowClose() {
    this.setState({ visible: false });
  }

  /**
   * Handle the user's input and empty the quickReplies
   * @param  {String} The user's input
   * @return null
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
   * @param  {String} The user's input
   * @return null
   */
  processUserInput(input) {
    const id = this.state.messages.length + 1;

    return { id, owner: 'user', type: 'text', text: input };
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="Chat__Window">
        <Header onChatWindowClose={ this.handleChatWindowClose } />
        <Main
          isBotTyping={ this.state.isBotTyping }
          messages={ this.state.messages }
          quickReplies={ this.state.quickReplies }
          onUserInput={ this.handleUserInput }
        />
        <Footer onUserInput={ this.handleUserInput } />
      </div>
    );
  }
}
