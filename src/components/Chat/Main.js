import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';
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
   * Render the bot typing indicator if the bot is "typing"
   * @return {ReactElement} The typing indicator
   */
  renderTypingIndicator() {
    if (!this.props.isBotTyping) {
      return null;
    }
    return (
      <div className="Chat__Window__MessageWrapper">
        <div className="Chat__Window__BotMessage--typing">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
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

    if (!replies.length) {
      return null;
    }
    return (
      <div className="Chat__Window__QuickReplies__Wrapper">
        {replies}
      </div>
    );
  }

  /**
   * Scroll the quick replies from right to left to show the user the full list
   * @return null
   */
  componentDidMount() {
    if (this.props.quickReplies) {
      const $wrapper = $('.Chat__Window__QuickReplies__Wrapper');
      $wrapper.scrollLeft($wrapper[0].scrollWidth);
      $wrapper.animate({ scrollLeft: 0 }, $wrapper[0].scrollWidth * 2);
    }
  }

  /**
   * Scroll to the bottom of the window on update
   * @return {[type]} [description]
   */
  componentDidUpdate() {
    const $main = $('.Chat__Window__Main');
    $main.scrollTop($main[0].scrollHeight);
    $main.animate({ scrollTop: $main[0].scrollHeight }, 500);
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Window__Main">
        {this.renderMessages()}
        {this.renderTypingIndicator()}
        {this.renderQuickReplies()}
      </div>
    );
  }
}
