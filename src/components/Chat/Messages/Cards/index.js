import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { cards: [] };

/**
 * Render an array of Card Elements
 * @param {Array} props The properties pass in to this Element
 * @return {Array}
 */
const Cards = ({ cards }) => {
  if (!cards.length) {
    return null;
  }

  const elements = cards.map(card =>
    (<li key={card.id}>
      <Card {...card} />
    </li>),
  );

  return (
    <ul className="Chat__X_Scrollable center">
      {elements}
    </ul>
  );
};

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;

export default Cards;
