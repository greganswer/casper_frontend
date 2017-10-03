import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Messages from '../Messages';
import TypingIndicator from '../Messages/TypingIndicator';
import QuickReplies from '../Messages/QuickReplies';

const propTypes = {
  isBotTyping: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  onUserInput: PropTypes.func.isRequired,
  quickReplies: PropTypes.arrayOf(PropTypes.object),
  removeQuickReplies: PropTypes.func.isRequired,
};

const defaultProps = {
  messages: [],
  quickReplies: [],
};

/**
 * The Chat window is broken up into 3 sections: Header, Main, Footer
 * @type {React.Component}
 */
class Main extends Component {
  /**
   * Scroll to the bottom of the window on update
   * @return {[type]} [description]
   */
  componentDidMount() {
    const main = document.querySelector('.Chat__Main');
    main.scrollTop = main.scrollHeight;
  }

  /**
   * Scroll to the bottom of the window on update
   * @return {[type]} [description]
   */
  componentDidUpdate() {
    const main = document.querySelector('.Chat__Main');
    main.scrollTop = main.scrollHeight;
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Main">
        <Messages messages={this.props.messages} />
        <TypingIndicator visible={this.props.isBotTyping} />
        <QuickReplies
          quickReplies={this.props.quickReplies}
          onUserInput={this.props.onUserInput}
          removeQuickReplies={this.props.removeQuickReplies}
        />
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
