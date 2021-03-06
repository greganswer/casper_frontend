import React, { Component } from 'react';

/**
 * App Header
 * @type {React.Component}
 */
export default class Header extends Component {
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
   * @return {React.Element|null}
   */
  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo hide-on-large-only">
                Casper
              </a>
              <a className="button-collapse jsButtonCollapse" data-activates="SideNav" href="#">
                <i className="material-icons">menu</i>
              </a>
              <a href="#" className="ShoppingCart--MobileHeader">
                <i className="fa fa-shopping-cart" />
              </a>
              <ul className="hide-on-med-and-down">
                <li>
                  <a href="#" className="logo">
                    Casper
                  </a>
                </li>
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
              </ul>

              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="tel:18884980003">
                    <i className="fa fa-phone" /> &nbsp; +1 888–498–0003
                  </a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
