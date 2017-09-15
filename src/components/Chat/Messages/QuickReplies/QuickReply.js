import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content_type: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  onUserInput: PropTypes.func.isRequired,
  payload: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = { image_url: '', payload: '', title: '' };

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
    this.props.onUserInput(this.props.title);
  }

  /**
   * Render an Image React.Element or null
   * @return {React.Element|null}
   */
  renderImage() {
    if (this.props.image_url) {
      return <img src={this.props.image_url} alt="" />;
    }

    return null;
  }

  /**
   * Send the string message or null
   * @return {string|null}
   */
  renderTitle() {
    if (this.props.content_type === 'location') {
      return 'Send Location';
    }

    return this.props.title ? this.props.title : null;
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <button className="Chat__QuickReply" onClick={this.handleClick}>
        {this.renderImage()}
        {this.renderTitle()}
      </button>
    );
  }
}

QuickReply.propTypes = propTypes;
QuickReply.defaultProps = defaultProps;

export default QuickReply;
