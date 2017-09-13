import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';
import Cards from './Cards';
import Image from './Image';
import Text from './Text';

const propTypes = { messages: PropTypes.arrayOf(PropTypes.object) };
const defaultProps = { messages: [] };

/**
 *
 * @type {React.Component}
 */
class Messages extends Component {
  /**
   * Scroll to the bottom of the window on update
   * @return {[type]} [description]
   */
  componentDidUpdate() {
    const $main = $('.Chat__Messages');
    $main.scrollTop($main[0].scrollHeight);
    $main.animate({ scrollTop: $main[0].scrollHeight }, 500);
  }

  /**
   * Render a list Element based the type given in message.type
   * @param  {int} index The currenet position in the messages array
   * @return {React.Element} [description]
   */
  renderListItem(index) {
    const messages = this.props.messages;
    const message = messages[index];
    const previousMessage = messages[index - 1];
    const isFirstFromOwner = !previousMessage || previousMessage.owner !== message.owner;

    const components = { cards: Cards, image: Image, text: Text };
    const SpecificMessage = components[message.type];

    if (!SpecificMessage) {
      return <li />;
    }

    return (
      <li key={message.id} className={isFirstFromOwner ? 'first-from-sender' : ''}>
        <SpecificMessage {...message} />
      </li>
    );
  }

  /**
   * Render the messages
   * @return {React.Element}
   */
  render() {
    const messages = this.props.messages;

    if (!messages.length) {
      return null;
    }

    return (
      <ul className="Chat__Messages">
        {messages.map((message, index) => this.renderListItem(index))}
      </ul>
    );
  }
}

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
