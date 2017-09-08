import React from 'react';
import PropTypes from 'prop-types';
import QuickReply from './QuickReply';

const propTypes = {
  onUserInput: PropTypes.func.isRequired,
  quickReplies: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { quickReplies: [] };

/**
 * Render an array of QuickReply Elements
 * @param {Array} props The properties pass in to this Element
 * @return {Array}
 */
const QuickReplies = ({ quickReplies, onUserInput }) => {
  if (!quickReplies.length) {
    return null;
  }

  const replies = quickReplies.map(quickReply =>
    <QuickReply key={quickReply.id} onUserInput={onUserInput} {...quickReply} />,
  );

  return (
    <div className="Chat__X_Scrollable center">
      {replies}
    </div>
  );
};

QuickReplies.propTypes = propTypes;
QuickReplies.defaultProps = defaultProps;

export default QuickReplies;
