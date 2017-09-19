import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Text from '../../../Text';

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
        <ul className="Buttons">
          {this.props.buttons.map(button => (
            <li key={uuid.v1()}>
              <a href={button.url}>{button.title}</a>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Template__Button">
        <Text sender={{ type: 'bot' }} message={{ text: this.props.text }} />
      </div>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
