import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';
import PropTypes from 'prop-types';
import Card from './Card';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { cards: [] };

/**
 *
 * @type {React.Component}
 */
class Cards extends Component {
  /**
   * Scroll to the bottom of the window on update
   * @return {[type]} [description]
   */
  componentDidMount() {
    if (this.props.cards.length) {
      const $wrapper = $('.Chat__Cards');
      $wrapper.scrollLeft($wrapper[0].scrollWidth);
      $wrapper.animate({ scrollLeft: 0 }, 2000);
    }
  }

  /**
   * Render this component
   * @return {ReactElement}
   */
  render() {
    if (!this.props.cards.length) {
      return null;
    }

    const elements = this.props.cards.map(card =>
      (<li key={card.id}>
        <Card {...card} />
      </li>),
    );

    return (
      <ul className="Chat__Cards">
        {elements}
      </ul>
    );
  }
}

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;

export default Cards;
