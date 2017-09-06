import React, { Component } from 'react';

export default class Message extends Component {
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
    return <img src={this.props.value} alt={this.props.alt} className="Chat__Window__Image" />;
  }

  /**
   * Render some text in the chat window
   * @return {ReactElement} The text element
   */
  renderText() {
    const className = `Chat__Window__${this.capitalize(this.props.owner)}Message`;

    return (
      <div className={className}>
        {this.props.value}
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
        {this.props.type === 'text' ? this.renderText() : this.renderImage()}
      </div>
    );
  }
}
