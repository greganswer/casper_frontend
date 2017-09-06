import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Window extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      quickReplies: [
        {
          id: 1,
          alt: 'Lovely face',
          text: 'Get Started',
          image:
            'https://i.pinimg.com/736x/b5/a6/3b/b5a63b0da8d66df3dd10f269be70ea88--always-smile-face-oil.jpg',
        },
        { id: 2, text: 'Send Location', icon: 'map-marker' },
        { id: 3, text: 'More Info' },
        { id: 4, text: 'Other options', icon: 'ellipsis-v', iconClass: 'red' },
        { id: 5, text: 'Red', icon: 'check', iconClass: 'red' },
        { id: 6, text: 'Green', icon: 'check', iconClass: 'green' },
        { id: 7, text: 'Blue', icon: 'check', iconClass: 'blue' },
      ],
      messages: [
        { id: 1, owner: 'bot', text: 'Hello there and welcome to Casper. I am CasperBot' },
        {
          id: 2,
          owner: 'bot',
          text:
            'I was built a very talented developer named <a href="http://greganswer.com">Greg Answer</a> who loves his Casper mattress.',
        },
        {
          id: 3,
          owner: 'bot',
          image:
            'http://heydoyou.com/wp-content/uploads/2016/04/e59f99c255a2cb8499d57924f1f1dae7.jpg',
        },
        { id: 4, owner: 'user', text: 'Hello CasperBot' },
        { id: 5, owner: 'bot', text: 'Hello my friend!' },
        { id: 6, owner: 'bot', text: 'How may I assist you today?' },
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
   * Handle the user's input and empty the quickReplies
   * @param  {String} The user's input
   * @return null
   */
  handleUserInput(input) {
    let messages = this.state.messages;
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
    return { id: id, owner: 'user', type: 'text', text: input };
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
        <Main
          messages={this.state.messages}
          quickReplies={this.state.quickReplies}
          onUserInput={this.handleUserInput}
        />
        <Footer onUserInput={this.handleUserInput} />
      </div>
    );
  }
}
