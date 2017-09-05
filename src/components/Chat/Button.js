import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ visible: false });
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="fixed-action-btn">
        <button
          className="btn-floating btn-large waves-effect waves-circle waves-light indigo "
          onClick={e => this.handleClick(e)}
        >
          <i className="fa fa-comments" />
        </button>
      </div>
    );
  }
}
