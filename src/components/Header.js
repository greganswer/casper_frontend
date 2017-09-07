import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo darken-3">
              <a href="#" className="brand-logo hide-on-large-only">
                Casper
              </a>
              <a
                className="button-collapse jsButtonCollapse"
                data-activates="menu-mobile-side"
                href="#"
              >
                <i className="material-icons">menu</i>
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
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
