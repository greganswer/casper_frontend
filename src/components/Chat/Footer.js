import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

export default class Footer extends Component {
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      // TODO: Add the message to Chat__Window__Main
      e.target.value = null;
    }
  }

  render() {
    return (
      <div className="Chat__Window__Footer">
        <Textarea
          type="text"
          name="message"
          rows="1"
          placeholder="Type here and hit enter to chat"
          autoComplete="off"
          className=" Chat__Window__Input"
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}
