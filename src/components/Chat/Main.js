import React, { Component } from 'react';
import Message from './Message';
import QuickReply from './QuickReply';

export default class Main extends Component {
  /**
   * Is this the first message from the owner (user or bot)?
   * @param  {Number} index The Current index in the array
   * @return {Boolean}
   */
  isFirstFromOwner(index) {
    const messages = this.props.messages;
    return !messages[index - 1] || messages[index - 1].owner !== messages[index].owner;
  }

  /**
   * Render an array of Message Elements
   * @return {Array}
   */
  renderMessages() {
    return this.props.messages.map((message, index) => {
      return (
        <Message key={message.id} isFirstFromOwner={this.isFirstFromOwner(index)} {...message} />
      );
    });
  }

  /**
   * Render an array of QuickReply Elements
   * @return {Array}
   */
  renderQuickReplies() {
    const replies = this.props.quickReplies.map((quickReply, index) => {
      return (
        <QuickReply key={quickReply.id} onUserInput={this.props.onUserInput} {...quickReply} />
      );
    });

    if (!replies) {
      return null;
    }
    return (
      <div className="Chat__Window__QuickReplies__Wrapper">
        {replies}
      </div>
    );
  }

  /**
   * Scroll to the bottom of the window on update
   * @return {[type]} [description]
   */
  componentDidUpdate() {
    let main = document.querySelector('.Chat__Window__Main');
    main.scrollTop = main.scrollHeight;
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Window__Main">
        {this.renderMessages()}
        {this.renderQuickReplies()}
      </div>
    );
  }
}
