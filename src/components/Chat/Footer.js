import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /**
   * Respond to user input
   * @param  {Event} e The event object
   * @return null
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      // TODO: Add the message to Chat__Window__Main
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
          maxRows={4}
          name="message"
          onKeyPress={this.handleKeyPress}
          placeholder="Type here and hit enter to chat"
          type="text"
        />
      </div>
    );
  }
}
