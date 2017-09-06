import React, { Component } from 'react';

export default class Message extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  /**
   * Capitalize the first letter
   * @param  {String} s The string to capitalize
   * @return {String} The capitalized string
   */
  capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  /**
   * Render an image in the chat window
   * @return {ReactElement} The image element
   */
  renderImage() {
    if (!this.props.image && !this.props.alt) {
      return null;
    }
    return (
      <img
        src={this.props.image}
        alt={this.props.alt}
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
   * @return {ReactElement} The text element
   */
  renderBotText() {
    return (
      <div
        className="Chat__Window__BotMessage"
        dangerouslySetInnerHTML={{ __html: this.props.text }}
      />
    );
  }

  /**
   * Render the User's text in the chat window
   * @return {ReactElement} The text element
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
   * @return {ReactElement}
   */
  render() {
    const wrapperClass = this.props.isFirstFromOwner ? 'first-from-owner' : '';

    return (
      <div className={`Chat__Window__MessageWrapper ${wrapperClass}`}>
        {this.renderImage()}
        {this.renderText()}
      </div>
    );
  }
}
