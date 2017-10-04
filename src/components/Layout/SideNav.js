import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

/**
 * Render this component
 */
class SideNav extends Component {
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
    return (
      <ul id="SideNav" className="side-nav">
        <li>
          <a href="#">Mattresses</a>
        </li>
        <li>
          <a href="#">Pillow</a>
        </li>
        <li>
          <a href="#">Sheets</a>
        </li>
        <li>
          <a href="#">Duvet</a>
        </li>
        <li>
          <a href="#">Bed Frames</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="tel:18884980003">
            <i className="fa fa-phone" /> +1 888–498–0003
          </a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    );
  }
}

SideNav.propTypes = propTypes;
SideNav.defaultProps = defaultProps;

export default SideNav;
