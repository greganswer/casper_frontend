import React, { Component } from 'react';
import '../css/App.css';
import '../libs/materialize';

import Header from './Header';
import Chat from './Chat';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <Header />
        <main>
          <Chat />
        </main>
        <Footer />
      </div>
    );
  }
}
