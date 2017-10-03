import React from 'react';
import PropTypes from 'prop-types';
import URI from 'urijs';

const propTypes = {
  sender: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    text: PropTypes.string,
    mid: PropTypes.string,
  }).isRequired,
};

/**
 * Format the message for HTML
 * @param  {string} text The text to be formatted
 * @return {string}
 */
function formatMessage(text) {
  const currentURI = new URI(window.location.href);

  return URI.withinString(text, (url) => {
    const urlObject = new URI(url);
    const isCurrentDomain = currentURI.domain() === urlObject.domain();
    const target = isCurrentDomain ? '_self' : '_blank';

    return `<a href="${url}" target=${target}>${url}</a>`;
  });
}

/**
 * Render this component
 * @param {Object} props The properties pass in to this Element
 * @return {React.Element}
 */
const Text = ({ sender, message }) => {
  if (sender.type === 'bot') {
    return (
      <div
        className="Chat__Message--Bot"
        dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
      />
    );
  } else if (sender.type === 'user' && message.text) {
    return <div className="Chat__Message--User">{message.text}</div>;
  }

  return null;
};

Text.propTypes = propTypes;

export default Text;
