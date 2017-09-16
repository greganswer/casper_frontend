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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /**
   * Respond to user input
   * @param  {Event} e The event object
   * @return {void}
   */
  handleKeyPress(e) {
    const textarea = e.target;
    const value = textarea.value.trim();

    if (value.length === 0) {
      textarea.value = '';
    }

    if (e.key === 'Enter') {
      if (value.length > 0) {
        this.props.onUserInput(value);
      }

      textarea.value = '';
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
          autoComplete="off"
          className="browser-default Chat__Input"
          maxRows={4}
          name="message"
          onKeyPress={this.handleKeyPress}
          placeholder="Type here and hit enter to chat"
          rows={1}
          type="text"
        />
      </div>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
