import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  // buttons: PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   type: PropTypes.string.isRequired,
  //   url: PropTypes.string,
  //   length: PropTypes.func.isRequired,
  //   map: PropTypes.func.isRequired,
  // }),
  default_action: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
  }),
  image_url: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  buttons: [],
  default_action: {},
  subtitle: '',
  image_url: '',
};

/**
 *
 * @type {React.Component}
 */
class Generic extends Component {
  /**
   * Render the Card buttons
   * @return {React.Element}
   */
  renderButtons() {
    if (!this.props.buttons.length) {
      return null;
    }

    return (
      <ul className="Chat__Card__Buttons">
        {this.props.buttons.map(button => (
          <li key={uuid.v1()}>
            <a href={button.url}>{button.title}</a>
          </li>
        ))}
      </ul>
    );
  }

  /**
   * Render the Card image
   * @return {React.Element}
   */
  renderHeader() {
    if (!this.props.image_url) {
      return null;
    }
    let imageElement = <img src={this.props.image_url} alt="" />;

    if (this.props.default_action.url) {
      imageElement = <a href={this.props.default_action.url}>{imageElement}</a>;
    }

    return <div className="Chat__Card__Header">{imageElement}</div>;
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Card">
        {this.renderHeader()}
        <div className="Chat__Card__Main">
          <div className="Chat__Card__Main__title">{this.props.title}</div>
          <div className="Chat__Card__Main__subtitle">{this.props.subtitle}</div>
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

Generic.propTypes = propTypes;
Generic.defaultProps = defaultProps;

export default Generic;
