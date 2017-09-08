import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Text = ({ text, owner }) => {
  if (owner === 'bot') {
    return <div className="Chat__Message Bot" dangerouslySetInnerHTML={{ __html: text }} />;
  } else if (owner === 'user') {
    return (
      <div className="Chat__Message User">
        {text}
      </div>
    );
  }

  return null;
};

Text.propTypes = propTypes;

export default Text;
