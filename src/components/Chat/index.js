import React, { Component } from 'react';

import Button from './Button';
import Window from './Window';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { isWindowOpen: false };
    this.handleWindowOpen = this.handleWindowOpen.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
  }

  handleWindowOpen() {
    this.setState({ isWindowOpen: true });
  }

  handleWindowClose() {
    this.setState({ isWindowOpen: false });
  }

  render() {
    return (
      <div>
        <Window isWindowOpen={this.state.isWindowOpen} />
        <Button onChatWindowOpen={this.handleWindowOpen} />
      </div>
    );
  }
}
