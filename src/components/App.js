import React, { Component } from 'react';
import '../css/App.css';
import '../libs/materialize';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import SideNav from './Layout/SideNav';
import HomePage from './Pages/Home';
import Chat from './Chat';

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
      <div className="App">
        <Header />
        <main>
          <HomePage />
          <Chat />
        </main>
        <SideNav />
        <Footer />
      </div>
    );
  }
}

export default App;
