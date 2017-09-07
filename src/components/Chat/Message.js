import React, { Component, PropTypes } from 'react';

/**
 * The Chat message
 * @type {React.Component}
 */
export default class Message extends Component {
  /**
   * Render an image in the chat window
   * @return {React.Element} The image element
   */
  renderImage() {
    if (!this.props.image && !this.props.alt) {
      return null;
    }

    return (
      <img
        src={ this.props.image }
        alt={ this.props.alt }
        className="Chat__Window__Image materialboxed"
      />
    );
  }

  /**
   * Render some text in the chat window
   * @return {ReactElement|null} The text element or null
   */
  renderText() {
    if (!this.props.text) {
      return null;
    }

    return this.props.owner === 'bot' ? this.renderBotText() : this.renderUserText();
  }

  /**
   * Render the Bot's text in the chat window
   * NOTE: This method can display HTML. Program discretion is advised.
   * @return {React.Element} The text element
   */
  renderBotText() {
    return (
      <div
        className="Chat__Window__BotMessage"
        dangerouslySetInnerHTML={ { __html: this.props.text } }
      />
    );
  }

  /**
   * Render the User's text in the chat window
   * @return {React.Element} The text element
   */
  renderUserText() {
    return (
      <div className="Chat__Window__UserMessage">
        {this.props.text}
      </div>
    );
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    const wrapperClass = this.props.isFirstFromOwner ? 'first-from-owner' : '';

    return (
      <div className={ `Chat__Window__MessageWrapper ${wrapperClass}` }>
        {this.renderImage()}
        {this.renderText()}
      </div>
    );
  }
}

Message.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFirstFromOwner: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
