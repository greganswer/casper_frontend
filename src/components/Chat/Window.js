import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      messages: [
        {
          id: 1,
          owner: 'bot',
          type: 'text',
          value: 'Hello there and welcome to Casper. I am CasperBot',
        },
        {
          id: 2,
          owner: 'bot',
          type: 'image',
          value:
            'http://heydoyou.com/wp-content/uploads/2016/04/e59f99c255a2cb8499d57924f1f1dae7.jpg',
        },
        {
          id: 3,
          owner: 'bot',
          type: 'text',
          value: 'How may I assist you today?',
        },
        { id: 4, owner: 'user', type: 'text', value: 'Hello CasperBot' },
      ],
    };
    this.handleChatWindowClose = this.handleChatWindowClose.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  /**
   * Close the Chat window
   * @return null
   */
  handleChatWindowClose() {
    this.setState({ visible: false });
  }

  /**
   * Handle the user's input
   * @param  {String} The user's input
   * @return null
   */
  handleUserInput(input) {
    let messages = this.state.messages;
    messages.push(this.processUserInput(input));
    this.setState({ messages });
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
    return { id: id, owner: 'user', type: 'text', value: input };
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
        <Header onChatWindowClose={this.handleChatWindowClose} />
        <Main messages={this.state.messages} />
        <Footer onUserInput={this.handleUserInput} />
      </div>
    );
  }
}
