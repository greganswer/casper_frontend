import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = { className: 'Chat__Message Image materialboxed' };

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Image = ({ image, alt, className }) => <img src={image} alt={alt} className={className} />;

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
