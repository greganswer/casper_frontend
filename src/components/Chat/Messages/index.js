import React from 'react';
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
 * Render an array of Message Elements
 * @param {Array} props The properties pass in to this Element
 * @return {Array}
 */
const Messages = ({ messages }) => {
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
};

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
