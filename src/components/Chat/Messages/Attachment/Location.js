import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';

const propTypes = {
  sender: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
  }).isRequired,
};

const defaultProps = {};

/**
 * Render this component
 * @type {React.Component}
 */
class Location extends Component {
  /**
   * Set materialize box when ready
   * @return {void}
   */
  componentDidMount() {
    $('.materialboxed').materialbox();
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    const alt = 'Your current location';
    let className = 'Chat__Message Image materialboxed ';
    className += this.props.sender.type === 'user' ? 'User' : 'Bot';
    const center = `${this.props.coordinates.lat},${this.props.coordinates.long}`;
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=14&size=400x400`;

    return <img src={url} alt={alt} className={className} />;
  }
}

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default Location;
