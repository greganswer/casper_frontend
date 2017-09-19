import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  payload: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {};

/**
 * Render this component
 * @type {React.Component}
 */
class PhoneNumber extends Component {
  /**
   * Initialize this component
   * @constructor
   * @param {Object} props The properties that are passed in
   */
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return <a href={`tel:${this.props.payload}`}>{this.props.title}</a>;
  }
}

PhoneNumber.propTypes = propTypes;
PhoneNumber.defaultProps = defaultProps;

export default PhoneNumber;
