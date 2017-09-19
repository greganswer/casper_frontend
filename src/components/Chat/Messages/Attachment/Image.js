import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';

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
 * @type {React.Component}
 */
class Image extends Component {
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
    return <img src={this.props.url} alt={this.props.alt} className={this.props.className} />;
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
