/**
 * Return an array of Cards and options for the user to click
 * @return {Array} list of cards
 */
const cards = () => [
  {
    image:
      'https://i.pinimg.com/736x/b5/a6/3b/b5a63b0da8d66df3dd10f269be70ea88--always-smile-face-oil.jpg',
    alt: '',
    options: [
      { id: 1, text: 'Visit link' },
      { id: 2, text: 'Add to cart' },
      { id: 3, text: 'See reviews', isExternal: true },
    ],
  },
];

export default cards;
