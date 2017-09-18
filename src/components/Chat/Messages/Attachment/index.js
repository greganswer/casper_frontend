import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Template from './Template';

const propTypes = {
  message: PropTypes.shape({
    attachment: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {};

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Attachment = ({ message }) => {
  const attachment = message.attachment;

  if (attachment.type === 'image') {
    return <Image {...attachment.payload} />;
  } else if (attachment.type === 'template') {
    return <Template {...attachment.payload} />;
  }

  return null;
};

Attachment.propTypes = propTypes;
Attachment.defaultProps = defaultProps;

export default Attachment;
