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
   * Render this component
   * @return {ReactElement}
   */
  render() {
    const messages = this.props.messages;
    const components = {
      cards: Cards,
      image: Image,
      text: Text,
    };

    if (!messages.length) {
      return null;
    }

    const elements = messages.map((message, index) => {
      const previousMessage = messages[index - 1];
      const isFirstFromOwner = !previousMessage || previousMessage.owner !== messages[index].owner;
      const wrapperClass = isFirstFromOwner ? 'first-from-owner' : '';
      const SpecificMessage = components[message.type];

      if (!SpecificMessage) {
        return <div />;
      }

      return (
        <div className={`Chat__Message__Wrapper ${wrapperClass}`}>
          <SpecificMessage {...message} />
        </div>
      );
    });

    return (
      <div className="Chat__Messages">
        {elements}
      </div>
    );
  }
}

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
