import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';
import Messages from '../Messages';
import TypingIndicator from '../Messages/TypingIndicator';
import QuickReplies from '../QuickReplies';

const propTypes = {
  isBotTyping: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  onUserInput: PropTypes.func.isRequired,
  quickReplies: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  messages: [],
  quickReplies: [],
};

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
    if (this.props.cards.length || this.props.quickReplies.length) {
      const $wrapper = $('.Chat__X_Scrollable');
      $wrapper.scrollLeft($wrapper[0].scrollWidth);
      $wrapper.animate({ scrollLeft: 0 }, $wrapper[0].scrollWidth * 2);
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
      <div className="Chat__X_Scrollable">
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
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Main">
        <Messages />
        <TypingIndicator visible={this.props.isBotTyping} />
        <QuickReplies />
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
