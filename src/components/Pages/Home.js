import React from 'react';

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Home = () =>
  (<div>
    <img src="/images/hero1.jpg" alt="Casper mattress and box" width="100%" />
    <div className="container">
      <div className="Section--large">
        <h3 className="center blue-text text-darken-4">Great sleep, made simple</h3>
        <br />
        <br />

        <div className="row">
          <div className="col s12 m4 center">
            <i className="fa fa-moon-o fa-3x blue-text text-darken-4" />
            <h5 className="blue-text text-darken-4">Risk-free Trial</h5>
            <p>
              We’re confident you’ll love your Casper, so we give you 100 nights to try it on us or
              we’ll pick it up and give you a full refund.
            </p>
          </div>
          <div className="col s12 m4 center">
            <i className="fa fa-truck fa-3x blue-text text-darken-4" />
            <h5 className="blue-text text-darken-4">Free Shipping &amp; Returns</h5>
            <p>
              Free shipping is included with every order. Returns are free, too. And we do our best
              to donate every returned mattress to a local charity.
            </p>
          </div>
          <div className="col s12 m4 center">
            <i className="fa fa-comments-o fa-3x blue-text text-darken-4" />
            <h5 className="blue-text text-darken-4">Exceptional Customer Service</h5>
            <p>
              We’ve got more than 40 snooze specialists available seven days a week to answer every
              question under the moon.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default Home;
