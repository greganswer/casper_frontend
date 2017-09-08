import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';
import Card from './Card';
import Message from './Message';
import QuickReply from './QuickReply';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  isBotTyping: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  onUserInput: PropTypes.func.isRequired,
  quickReplies: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  cards: [],
  messages: [],
  quickReplies: [],
};

/**
 * Scroll a wrapper div from right to left
 * @param  {[type]} className [description]
 * @return {[type]} [description]
 */
function scrollWrapperRightToLeft(className) {
  const $wrapper = $(`.${className}`);
  $wrapper.scrollLeft($wrapper[0].scrollWidth);
  $wrapper.animate({ scrollLeft: 0 }, $wrapper[0].scrollWidth * 2);
}

/**
 * The Chat window is broken up into 3 sections: Header, Main, Footer
 * @type {React.Component}
 */
class Main extends Component {
  /**
   * Scroll the quick replies from right to left to show the user the full list
   * @return {void}
   */
  componentDidMount() {
    if (this.props.cards.length) {
      scrollWrapperRightToLeft('Chat__Cards__Wrapper');
    }

    if (this.props.quickReplies.length) {
      scrollWrapperRightToLeft('Chat__QuickReplies__Wrapper');
    }
  }

  /**
     * Scroll to the bottom of the window on update
     * @return {[type]} [description]
     */
  componentDidUpdate() {
    const $main = $('.Chat__Main');
    $main.scrollTop($main[0].scrollHeight);
    $main.animate({ scrollTop: $main[0].scrollHeight }, 500);
  }

  /**
   * Is this the first message from the owner (user or bot)?
   * @param  {int} index The Current index in the array
   * @return {boolean}
   */
  isFirstFromOwner(index) {
    const messages = this.props.messages;

    return !messages[index - 1] || messages[index - 1].owner !== messages[index].owner;
  }

  /**
   * Render an array of Card Elements
   * @return {Array}
   */
  renderCards() {
    const cards = this.props.cards.map(card => <Card key={card.id} {...card} />);

    if (!cards.length) {
      return null;
    }

    return (
      <div className="Chat__Cards__Wrapper">
        {cards}
      </div>
    );
  }

  /**
   * Render an array of Message Elements
   * @return {Array}
   */
  renderMessages() {
    return this.props.messages.map((message, index) =>
      <Message key={message.id} isFirstFromOwner={this.isFirstFromOwner(index)} {...message} />,
    );
  }

  /**
   * Render the bot typing indicator if the bot is "typing"
   * @return {React.Element} The typing indicator
   */
  renderTypingIndicator() {
    if (!this.props.isBotTyping) {
      return null;
    }

    return (
      <div className="Chat__Message__Wrapper">
        <div className="Chat__BotMessage--typing">
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
    const replies = this.props.quickReplies.map(quickReply =>
      <QuickReply key={quickReply.id} onUserInput={this.props.onUserInput} {...quickReply} />,
    );

    if (!replies.length) {
      return null;
    }

    return (
      <div className="Chat__QuickReplies__Wrapper">
        {replies}
      </div>
    );
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Main">
        {this.renderMessages()}
        {this.renderTypingIndicator()}
        {this.renderCards()}
        {this.renderQuickReplies()}
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
