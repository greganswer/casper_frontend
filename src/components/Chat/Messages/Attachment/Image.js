import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  alt: '',
  className: 'Chat__Message Image materialboxed',
};

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Image = ({ url, alt, className }) => <img src={url} alt={alt} className={className} />;

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
