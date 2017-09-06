import React, { Component } from 'react';
import Message from './Message';

export default class Main extends Component {
  /**
   * Is this the first message from the owner (user or bot)?
   * @param  {Number} index The Current index in the array
   * @return {Boolean}
   */
  isFirstFromOwner(index) {
    const messages = this.props.messages;

    return !messages[index - 1] || messages[index - 1].owner !== messages[index].owner;
  }

  /**
   * Render an array of Message Elements
   * @return {Array}
   */
  renderMessages() {
    return this.props.messages.map((message, index) => {
      return (
        <Message key={message.id} isFirstFromOwner={this.isFirstFromOwner(index)} {...message} />
      );
    });
  }

  componentDidUpdate() {
    let main = document.querySelector('.Chat__Window__Main');
    main.scrollTop = main.scrollHeight;
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Chat__Window__Main">
        {this.renderMessages()}
      </div>
    );
  }
}
