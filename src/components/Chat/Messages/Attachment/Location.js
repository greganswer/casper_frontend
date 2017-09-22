import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  sender: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  coordinates: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    long: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {};

/**
 * Render this component
 * @param {Object} props The properties pass in to this Element
 * @return {React.Element}
 */
const Location = ({ sender, coordinates }) => {
  const alt = 'Your current location';
  let className = 'Chat__Message Image ';
  className += sender.type === 'user' ? 'User' : 'Bot';
  const center = `${coordinates.lat},${coordinates.long}`;
  const key = process.env.REACT_APP_GOOGLE_MAPS_GEOCODING_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${key}&center=${center}&zoom=14&size=400x400`;

  return <img src={url} alt={alt} className={className} />;
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Location;
