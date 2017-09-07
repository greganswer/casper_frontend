import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

export default class Footer extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /**
   * Respond to user input
   * @param  {Event} e The event object
   * @return null
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
   * @return {ReactElement}
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
