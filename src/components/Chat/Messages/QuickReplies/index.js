import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import QuickReply from './QuickReply';

const propTypes = {
  onUserInput: PropTypes.func.isRequired,
  quickReplies: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { quickReplies: [] };

/**
 *
 * @type {React.Component}
 */
class QuickReplies extends Component {
  /**
   * Scroll the quick replies from right to left to show the user the full list
   * TODO: Export this to a utility function
   * @return {void}
   */
  componentDidMount() {
    if (this.props.quickReplies.length) {
      const $wrapper = $('.Chat__QuickReplies');
      $wrapper.scrollLeft($wrapper[0].scrollWidth);
      $wrapper.animate({ scrollLeft: 0 }, $wrapper[0].scrollWidth * 2);
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

    const elements = this.props.quickReplies.map(quickReply =>
      (<li key={uuid.v1()}>
        <QuickReply onUserInput={this.props.onUserInput} {...quickReply} />
      </li>),
    );

    return (
      <ul className="Chat__QuickReplies">
        {elements}
      </ul>
    );
  }
}

QuickReplies.propTypes = propTypes;
QuickReplies.defaultProps = defaultProps;

export default QuickReplies;
