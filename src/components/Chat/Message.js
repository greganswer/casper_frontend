import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  renderImage() {
    return <img src={this.props.value} alt={this.props.alt} />;
  }

  renderText() {
    const className = `Chat__Window__${this.capitalize(this.props.owner)}Message`;

    return (
      <div className={className}>
        {this.props.value}
      </div>
    );
  }

  render() {
    const wrapperClass = this.props.isFirstFromOwner ? 'first-from-owner' : '';

    return (
      <div className={`Chat__Window__MessageWrapper ${wrapperClass}`}>
        {this.props.type === 'text' ? this.renderText() : this.renderImage()}
      </div>
    );
  }
}
