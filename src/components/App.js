import React, { Component } from 'react';
import '../css/App.css';
import '../libs/materialize';

import Header from './Header';
import Chat from './Chat';
import Footer from './Footer';

/**
 * The entire React app
 * @type {React.Component}
 */
class App extends Component {
  /**
   * Initialize this component
   * @constructor
   * @param  {Object} props The properties that are passed in
   */
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  /**
   * Render this component
   * @return {React.Element}
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

export default App;
