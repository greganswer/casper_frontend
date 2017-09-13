import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  sender: PropTypes.shape({ type: PropTypes.string }).isRequired,
  message: PropTypes.shape({ text: PropTypes.string, mid: PropTypes.string }).isRequired,
};

/**
 * Render this component
 * @param {Object} props The properties pass in to this Element
 * @return {React.Element}
 */
const Text = ({ sender, message }) => {
  if (sender.type === 'bot') {
    return <div className="Chat__Message Bot" dangerouslySetInnerHTML={{ __html: message.text }} />;
  } else if (sender.type === 'user') {
    return (
      <div className="Chat__Message User">
        {message.text}
      </div>
    );
  }

  return null;
};

Text.propTypes = propTypes;

export default Text;
