import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery/dist/jquery';

const propTypes = {
  onChatWindowOpen: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

const defaultProps = {
  isVisible: true,
};

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
    this.state = { isVisible: this.props.isVisible };
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
      }, 20000);
    });
  }

  /**
     * Check if the window is open
     * @param  {Object} newProps The new properties being passed in
     * @return {void}
     */
  componentWillReceiveProps(newProps) {
    this.setState({ isVisible: newProps.isVisible });
  }

  /**
   * Open the chat window on click
   * @return {void}
   */
  handleClick() {
    this.props.onChatWindowOpen();
    this.setState({ isVisible: false });
  }

  /**
   * Render this component
   * @return {React.Element|null}
   */
  render() {
    if (!this.props.isVisible) {
      return null;
    }

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
