import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  image: PropTypes.string,
  onUserInput: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  alt: '',
  icon: '',
  iconClass: '',
  image: '',
};

/**
 * A QuickReply allows users to click a button instead of type text
 * @type {React.Component}
 */
class QuickReply extends Component {
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
   * Render an Image React.Element or null
   * @return {React.Element|null}
   */
  renderImage() {
    if (this.props.image && this.props.alt) {
      return <img src={this.props.image} alt={this.props.alt} />;
    } else if (this.props.icon) {
      return <i className={`fa fa-${this.props.icon} ${this.props.iconClass}`} />;
    }

    return null;
  }

  /**
   * Send the string message or null
   * @return {string|null}
   */
  renderText() {
    return this.props.text ? this.props.text : null;
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <button className="Chat__QuickReply" onClick={this.handleClick}>
        {this.renderImage()}
        {this.renderText()}
      </button>
    );
  }
}

QuickReply.propTypes = propTypes;
QuickReply.defaultProps = defaultProps;

export default QuickReply;
