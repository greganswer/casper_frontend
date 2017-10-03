import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  alt: '',
  className: 'Chat__Message--Bot Chat__Message--Image',
};

/**
 * Render this component
 * @param {Object} props The properties pass in to this Element
 * @return {React.Element}
 */
const Image = ({ url, alt, className }) => <img src={url} alt={alt} className={className} />;

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
