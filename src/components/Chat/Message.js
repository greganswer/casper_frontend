import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string,
  isFirstFromOwner: PropTypes.bool,
  owner: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  alt: '',
  image: '',
  isFirstFromOwner: true,
  text: '',
};

/**
 * The Chat message
 * @type {React.Component}
 */
class Message extends Component {
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
        src={this.props.image}
        alt={this.props.alt}
        className="Chat__Image materialboxed"
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
    } else if (this.props.owner === 'bot') {
      return (
        <div
          className="Chat__BotMessage"
          dangerouslySetInnerHTML={{ __html: this.props.text }}
        />
      );
    } else if (this.props.owner === 'user') {
      return (
        <div className="Chat__UserMessage">
          {this.props.text}
        </div>
      );
    }

    return null;
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    const wrapperClass = this.props.isFirstFromOwner ? 'first-from-owner' : '';

    return (
      <div className={`Chat__Message__Wrapper ${wrapperClass}`}>
        {this.renderImage()}
        {this.renderText()}
      </div>
    );
  }
}

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
