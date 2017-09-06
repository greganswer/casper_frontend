import React, { Component } from 'react';
import '../css/App.css';
import '../libs/materialize';

import Header from './Header';
import Chat from './Chat';
import Footer from './Footer';

export default class App extends Component {
  /**
   * Initialize this component
   * @param  {Object} props The properties that are passed in
   * @return null
   */
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
