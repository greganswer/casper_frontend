import React, { Component } from 'react';

import Button from './Button';
import Window from './Window';

export default class Chat extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
  constructor(props) {
    super(props);
    this.state = { isWindowOpen: false };
    this.handleWindowOpen = this.handleWindowOpen.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
  }

  /**
   * Open the Chat window
   * @return null
   */
  handleWindowOpen() {
    this.setState({ isWindowOpen: true });
  }

  /**
   * Close the Chat window
   * @return null
   */
  handleWindowClose() {
    this.setState({ isWindowOpen: false });
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <Window isWindowOpen={ this.state.isWindowOpen } />
        <Button onChatWindowOpen={ this.handleWindowOpen } />
      </div>
    );
  }
}
