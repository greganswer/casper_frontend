import React, { Component } from 'react';

export default class Footer extends Component {
  handleChatWindowClose(e) {
    // TODO: Close Chat Window
  }

  render() {
    return (
      <div className="Chat__Window__Footer">
        <textarea
          type="text"
          name="message"
          rows="1"
          placeholder="Type here and hit enter to chat"
          autoComplete="off"
          className=" Chat__Window__Input"
        />
      </div>
    );
  }
}
