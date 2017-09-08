import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import Image from './Image';
import Text from './Text';

const propTypes = { messages: PropTypes.arrayOf(PropTypes.object) };
const defaultProps = { messages: [] };
const components = {
  cards: Cards,
  image: Image,
  text: Text,
};

/**
 *
 * @type {React.Component}
 */
class Messages extends Component {
  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    const messages = this.props.messages;

    if (!messages.length) {
      return null;
    }

    return messages.map((message, index) => {
      const previousMessage = messages[index - 1];
      const isFirstFromOwner = !previousMessage || previousMessage.owner !== messages[index].owner;
      const wrapperClass = isFirstFromOwner ? 'first-from-owner' : '';
      const SpecificMessage = components[message.type];

      return (
        <div className={`Chat__Message__Wrapper ${wrapperClass}`}>
          <SpecificMessage {...message} />;
        </div>
      );
    });
  }
}

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
