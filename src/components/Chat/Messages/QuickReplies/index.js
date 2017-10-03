import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import QuickReply from './QuickReply';
import scrollRightToLeft from '../../../helpers/scrollRightToLeft';

const propTypes = {
  onUserInput: PropTypes.func.isRequired,
  removeQuickReplies: PropTypes.func.isRequired,
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
      <QuickReply
        key={uuid.v1()}
        onUserInput={this.props.onUserInput}
        removeQuickReplies={this.props.removeQuickReplies}
        {...quickReply}
      />
    ));

    return <div className="Chat__QuickReplies">{elements}</div>;
  }
}

QuickReplies.propTypes = propTypes;
QuickReplies.defaultProps = defaultProps;

export default QuickReplies;
