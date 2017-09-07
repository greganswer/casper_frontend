import React, { Component } from 'react';

export default class QuickReply extends Component {
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
   * Respond to a user clicking the QuickReply
   * @return {void}
   */
  handleClick() {
    this.props.onUserInput(this.props.text);
  }

  /**
   * Render an Image ReactElement or null
   * @return {ReactElement|null}
   */
  renderImage() {
    if (this.props.image && this.props.alt) {
      return <img src={ this.props.image } alt={ this.props.alt } />;
    } else if (this.props.icon) {
      return <i className={ `fa fa-${this.props.icon} ${this.props.iconClass}` } />;
    }

    return null;
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
      <div className="Chat__Window__QuickReply" onClick={ this.handleClick }>
        {this.renderImage()}
        {this.renderText()}
      </div>
    );
  }
}
