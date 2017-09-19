import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getUserGeolocation from '../../../../services/getUserGeolocation';

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
  async handleClick() {
    const input = {};

    if (this.props.content_type === 'location') {
      const { coords } = await getUserGeolocation();
      input.attachments = [
        {
          title: "User's location",
          type: 'location',
          payload: {
            coordinates: {
              lat: coords.latitude,
              long: coords.longitude,
            },
          },
        },
      ];
    } else {
      input.text = this.props.title;
      input.quick_reply = this.props;
    }

    this.props.onUserInput(input);
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
      return (
        <span>
          <i className="fa fa-map-marker" />
          <span>Send Location</span>
        </span>
      );
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
