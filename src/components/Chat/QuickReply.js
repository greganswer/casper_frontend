import React, { Component } from 'react';

export default class QuickReply extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Respond to a user clicking the QuickReply
   * @return null
   */
  handleClick() {
    this.props.onUserInput(this.props.text);
  }

  /**
   * Render an Image ReactElement or null
   * @return {ReactElement|null}
   */
  renderImage() {
    return this.props.image && this.props.alt
      ? <img src={this.props.image} alt={this.props.alt} />
      : null;
  }

  /**
   * Send the string message or null
   * @return {String|null}
   */
  renderText() {
    return this.props.text ? this.props.text : null;
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Window__QuickReply" onClick={this.handleClick}>
        {this.renderImage()}
        {this.renderText()}
      </div>
    );
  }
}
