import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';
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
   * @return {void}
   */
  componentDidMount() {
    if (this.props.quickReplies.length) {
      const $wrapper = $('.Chat__X_Scrollable');
      $wrapper.scrollLeft($wrapper[0].scrollWidth);
      $wrapper.animate({ scrollLeft: 0 }, $wrapper[0].scrollWidth * 2);
    }
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    if (!this.props.quickReplies.length) {
      return null;
    }

    const elements = this.props.quickReplies.map(quickReply =>
      <QuickReply key={quickReply.id} onUserInput={this.props.onUserInput} {...quickReply} />,
    );

    return (
      <div className="Chat__X_Scrollable center">
        {elements}
      </div>
    );
  }
}

QuickReplies.propTypes = propTypes;
QuickReplies.defaultProps = defaultProps;

export default QuickReplies;
