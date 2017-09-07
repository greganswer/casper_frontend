import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';

/**
 * The Chat window is broken up into 3 sections: Header, Main, Footer
 * @type {React.Component}
 */
export default class Footer extends Component {
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
    if (e.key === 'Enter') {
      // TODO: Send message to NLP provider
      this.props.onUserInput(e.target.value);
      e.target.value = null;
    }
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Window__Footer">
        <Textarea
          autoComplete="off"
          className=" Chat__Window__Input"
          maxRows={ 4 }
          name="message"
          onKeyPress={ this.handleKeyPress }
          placeholder="Type here and hit enter to chat"
          type="text"
        />
      </div>
    );
  }
}

Footer.propTypes = {
  onUserInput: PropTypes.func.isRequired,
};
