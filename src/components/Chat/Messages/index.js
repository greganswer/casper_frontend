import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';
import Attachment from './Attachment/index';
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

    if ($main[0]) {
      $main.scrollTop($main[0].scrollHeight);
      $main.animate({ scrollTop: $main[0].scrollHeight }, 200);
    }
  }

  /**
   * Is this message the first from sender
   * @param  {Object} item The currenet message in the messages array
   * @param  {int} index The currenet position in the messages array
   * @return {boolean} [description]
   */
  isFirstFromSender(item, index) {
    const items = this.props.messages;
    const previousItem = items[index - 1];

    return !previousItem || previousItem.sender.type !== item.sender.type;
  }

  /**
   * Render a list Element based the type given in message.type
   * @param  {Object} item The currenet message in the messages array
   * @param  {int} index The currenet position in the messages array
   * @return {React.Element} [description]
   */
  renderListItem(item, index) {
    const message = item.message;
    const hasAttachment = message.attachment || message.attachments;
    const SpecificMessage = hasAttachment ? Attachment : Text;

    return (
      <li
        key={message.mid}
        className={this.isFirstFromSender(item, index) ? 'first-from-sender' : ''}
      >
        <SpecificMessage {...item} />
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
        {messages.map((item, index) => this.renderListItem(item, index))}
      </ul>
    );
  }
}

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
