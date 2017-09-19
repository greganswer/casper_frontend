import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Text from '../../../Text';
import PhoneNumber from './PhoneNumber';

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
        <ul className="collection">
          {this.props.buttons.map(button => (
            <li key={uuid.v1()} className="collection-item">
              {this.renderButtonType(button)}
            </li>
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
    if (button.type === 'phone_number') {
      return <PhoneNumber {...button} />;
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
        {this.renderButtons()}
      </div>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
