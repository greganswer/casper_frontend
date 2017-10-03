import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Text from '../../../Text';
import URI from 'urijs';

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  template_type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const defaultProps = {};

/**
 *
 * @type {React.Component}
 */
class Button extends Component {
  /**
   * Render the Card buttons
   * @return {React.Element}
   */
  renderButtons() {
    if (this.props.buttons.length) {
      return (
        <ul className="Chat__Message--Bot Chat__Message__Buttons">
          {this.props.buttons.map(button => (
            <li key={uuid.v1()}>{this.renderButtonType(button)}</li>
          ))}
        </ul>
      );
    }

    return null;
  }

  /**
   * Render button type
   * @param  {Object} button The button to be rendered
   * @return {React.Element}
   */
  renderButtonType(button) {
    if (button.type === 'web_url') {
      const currentURI = new URI(window.location.href);
      const urlObject = new URI(button.url);
      const isCurrentDomain = currentURI.domain() === urlObject.domain();
      const target = isCurrentDomain ? '_self' : '_blank';

      return (
        <a href={button.url} target={target}>
          {button.title}
        </a>
      );
    } else if (button.type === 'phone_number') {
      return <a href={`tel:${button.payload}`}>{button.title}</a>;
    }

    return null;
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <Text sender={{ type: 'bot' }} message={{ text: this.props.text }} />
        {this.renderButtons()}
      </div>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
