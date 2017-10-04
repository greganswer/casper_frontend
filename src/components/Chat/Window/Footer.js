import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

const propTypes = {
  onUserInput: PropTypes.func.isRequired,
};

const defaultProps = {};

/**
 * The Chat window is broken up into 3 sections: Header, Main, Footer
 * @type {React.Component}
 */
class Footer extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = { isSubmiting: false };
    this.handleInputSubmission = this.handleInputSubmission.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /**
   * Respond to user click
   * @return {void}
   */
  handleInputSubmission() {
    const textarea = document.getElementById('chat-text-input');
    const text = textarea.value.trim();

    if (text.length > 0) {
      this.setState({ isSubmiting: true });
      this.props.onUserInput({ text });
      document.activeElement.blur();
    }

    textarea.value = '';
    this.setState({ isSubmiting: false });
  }

  /**
   * Respond to user input
   * @param  {Event} e The event object
   * @return {void}
   */
  handleKeyPress(e) {
    const textarea = document.getElementById('chat-text-input');
    const text = textarea.value.trim();

    if (text.length === 0) {
      textarea.value = '';
    }

    if (e.key === 'Enter') {
      this.handleInputSubmission();
      e.preventDefault();
    }
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Footer">
        <Textarea
          id="chat-text-input"
          autoComplete="off"
          className="browser-default Chat__Input"
          maxRows={4}
          name="message"
          onKeyPress={this.handleKeyPress}
          placeholder="Type here and hit enter to chat"
          rows={1}
          type="text"
        />
        <button
          className="Chat__Send__Button"
          onClick={this.handleInputSubmission}
          disabled={this.state.isSubmiting}
        >
          <i className="fa fa-paper-plane" />
        </button>
      </div>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
