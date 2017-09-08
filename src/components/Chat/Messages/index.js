import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { messages: [] };

/**
 * Render an array of Message Elements
 * @param {Array} props The properties pass in to this Element
 * @return {Array}
 */
const Messages = ({ messages }) => {
  if (!messages.length) {
    return null;
  }

  const messages = messages.map(message =>
    
  );

  return (
    <div className="Chat__X_Scrollable center">
      {messages}
    </div>
  );
};

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
