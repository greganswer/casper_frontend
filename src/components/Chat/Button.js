import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';

const propTypes = {
  onChatWindowOpen: PropTypes.func.isRequired,
};

const defaultProps = {};

/**
 * The button that opens the Chat Window
 * @type {React.Component}
 */
class Button extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Animate the button every few seconds to let the user know about the service
   * @return {void}
   */
  componentDidMount() {
    $(() => {
      setInterval(() => {
        const animationName = 'animated pulse';
        const animationend =
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.Chat__Button').addClass(animationName).one(animationend, function callback() {
          $(this).removeClass(animationName);
        });
      }, 10000);
    });
  }

  /**
   * Open the chat window on click
   * @return {void}
   */
  handleClick() {
    this.props.onChatWindowOpen();
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="fixed-action-btn">
        <button className="Chat__Button btn-floating btn-large purple" onClick={this.handleClick}>
          <i className="fa fa-comments" />
        </button>
      </div>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
