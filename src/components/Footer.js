import React from 'react';

/**
 * Render this component
 * @return {ReactElement}
 */
const Footer = props => (
  <footer className="page-footer indigo darken-3">
    <div className="container">
      <div className="row">
        <div className="col m12 l6">
          <div className="row">
            <div className="col s3">
              <h6>About</h6>
              <ul>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </div>
            <div className="col s3">
              <h6>Support</h6>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">PayBright Finacing</a>
                </li>
                <li>
                  <a href="#">Warranty</a>
                </li>
              </ul>
            </div>
            <div className="col s3">
              <h6>Stores</h6>
              <ul>
                <li>
                  <a href="#">San Francisco</a>
                </li>
              </ul>
            </div>
            <div className="col s3">
              <h6>Read more</h6>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Van Winkle's</a>
                </li>
                <li>
                  <a href="#">Follow Casper</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col m12 l6" />
      </div>
    </div>

    <div className="footer-copyright indigo darken-4">
      <div className="container center">
        <ul className="inline">
          <li>© 2014 Copyright</li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
