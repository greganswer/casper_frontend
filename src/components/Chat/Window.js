import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="Chat__Window">
        <Header />
        <Footer />
      </div>
    );
  }
}
