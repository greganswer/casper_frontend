import React from 'react';

/**
 * Footer for the app
 * @param {Array} props The properties passed in
 * @return {React.Element}
 */
const Footer = props =>
  (<footer className="page-footer">
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
        <div className="col m12 l6">
          <div className="col s12 m8 offset-m4">
            <ul className="footer-social-links">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-snapchat-ghost" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play" />
                </a>
              </li>
            </ul>
            <div>
              <a href="tel:18884980003">+1 888–498–0003</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright">
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
  </footer>);

export default Footer;
