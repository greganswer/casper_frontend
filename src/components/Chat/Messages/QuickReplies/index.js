import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import QuickReply from './QuickReply';
import scrollRightToLeft from '../../../helpers/scrollRightToLeft';

const propTypes = {
  onUserInput: PropTypes.func.isRequired,
  quickReplies: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { quickReplies: [] };

/**
 * Quick Reply list
 * @type {React.Component}
 */
class QuickReplies extends Component {
  /**
   * Scroll the quick replies from right to left to show the user the full list
   * @return {void}
   */
  componentDidMount() {
    if (this.props.quickReplies.length > 1) {
      scrollRightToLeft('.Chat__QuickReplies');
    }
  }
  /**
   * Scroll the quick replies from right to left to show the user the full list
   * @return {void}
   */
  componentDidUpdate() {
    if (this.props.quickReplies.length) {
      scrollRightToLeft('.Chat__QuickReplies');
    }
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    if (!this.props.quickReplies.length) {
      return null;
    }

    const elements = this.props.quickReplies.map(quickReply => (
      <li key={uuid.v1()}>
        <QuickReply onUserInput={this.props.onUserInput} {...quickReply} />
      </li>
    ));

    return <ul className="Chat__QuickReplies">{elements}</ul>;
  }
}

QuickReplies.propTypes = propTypes;
QuickReplies.defaultProps = defaultProps;

export default QuickReplies;
