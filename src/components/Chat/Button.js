import React, { Component } from 'react';

export default class Button extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Open the chat window on click
   * @param  {Event} e Event object
   * @return null
   */
  handleClick(e) {
    this.props.onChatWindowOpen();
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="fixed-action-btn">
        <button
          className="btn-floating btn-large waves-effect waves-circle waves-light indigo "
          onClick={e => this.handleClick(e)}
        >
          <i className="fa fa-comments" />
        </button>
      </div>
    );
  }
}
