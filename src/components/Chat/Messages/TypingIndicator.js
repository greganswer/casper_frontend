import React from 'react';
import PropTypes from 'prop-types';

const propTypes = { visible: PropTypes.bool };
const defaultProps = { visible: true };

/**
 * Render the bot typing indicator if the bot is "typing"
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element} The typing indicator
 */
const TypingIndicator = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="Chat__Message__Wrapper first-from-owner">
      <div className="Chat__Message--Bot--typing">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

TypingIndicator.propTypes = propTypes;
TypingIndicator.defaultProps = defaultProps;

export default TypingIndicator;
