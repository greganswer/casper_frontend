import React, { Component, PropTypes } from 'react';

/**
 * The button that opens the Chat Window
 * @type {React.Component}
 */
export default class Button extends Component {
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
        <button
          className="btn-floating btn-large waves-effect waves-circle waves-light indigo "
          onClick={ this.handleClick }
        >
          <i className="fa fa-comments" />
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onChatWindowOpen: PropTypes.func.isRequired,
};
