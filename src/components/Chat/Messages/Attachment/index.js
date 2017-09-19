import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Location from './Location';
import Template from './Template';

const propTypes = {
  sender: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    attachment: PropTypes.object,
    attachments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const defaultProps = {};

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Attachment = ({ sender, message }) => {
  const attachment = message.attachment || message.attachments[0];

  if (attachment.type === 'image') {
    return <Image {...attachment.payload} />;
  } else if (attachment.type === 'location') {
    return <Location sender={sender} {...attachment.payload} />;
  } else if (attachment.type === 'template') {
    return <Template {...attachment.payload} />;
  }

  return null;
};

Attachment.propTypes = propTypes;
Attachment.defaultProps = defaultProps;

export default Attachment;
