/**
 * Return an array of Cards and options for the user to click
 * @return {Array} list of cards
 */
const cards = () => [
  {
    id: 1,
    title: 'Mattresses',
    header: 'Float on a cloud',
    text:
      'Lorem ipsum dolor sit amet, nihil scripta assentior eu sit, eos no populo sensibus, appetere abhorreant rationibus nec id. Mea et nihil affert iriure. Ut populo percipit sea, no vis copiosae intellegat, sed tota molestiae te.',
    image:
      'https://casper.imgix.net/products_new/pcp/casper-sideview-pcp.jpg?auto=compress&q=65&w=300',
    alt: 'Casper mattress',
    options: [
      {
        id: 1,
        text: 'View mattresses',
        link: 'https://casper.com/ca/en/mattresses/',
        icon: 'globe',
      },
      { id: 2, text: 'See reviews', link: '#', icon: 'star-half-o', isExternal: true },
    ],
  },
  {
    id: 2,
    title: 'The pillow',
    header: 'Float on a cloud',
    text:
      'Lorem ipsum dolor sit amet, nihil scripta assentior eu sit, eos no populo sensibus, appetere abhorreant rationibus nec id. Mea et nihil affert iriure. Ut populo percipit sea, no vis copiosae intellegat, sed tota molestiae te.',
    image: 'https://casper.imgix.net/product/pip/us-pip-pillow-tile.jpg?auto=compress&q=65&w=300',
    alt: 'Casper pillow',
    options: [
      { id: 1, text: 'View pillow', link: 'https://casper.com/ca/en/pillows/', icon: 'globe' },
      { id: 2, text: 'Add to cart', link: '#', icon: 'shopping-cart' },
      { id: 3, text: 'See reviews', link: '#', icon: 'star-half-o', isExternal: true },
    ],
  },
  {
    id: 3,
    title: 'Sheets',
    header: 'Float on a cloud',
    text:
      'Lorem ipsum dolor sit amet, nihil scripta assentior eu sit, eos no populo sensibus, appetere abhorreant rationibus nec id. Mea et nihil affert iriure. Ut populo percipit sea, no vis copiosae intellegat, sed tota molestiae te.',
    image: 'https://casper.imgix.net/product/pip/us-pip-sheets-tile.jpg?auto=compress&q=65&w=300',
    alt: 'Casper sheets',
    options: [
      { id: 1, text: 'View pillow', link: 'https://casper.com/ca/en/sheets/', icon: 'globe' },
      { id: 2, text: 'See reviews', link: '#', icon: 'star-half-o', isExternal: true },
    ],
  },
  {
    id: 4,
    title: 'All Products',
    header: 'Float on a cloud',
    text:
      'Lorem ipsum dolor sit amet, nihil scripta assentior eu sit, eos no populo sensibus, appetere abhorreant rationibus nec id. Mea et nihil affert iriure. Ut populo percipit sea, no vis copiosae intellegat, sed tota molestiae te.',
    image: 'https://casper.imgix.net/product/pip/pip-sleep-system.jpg?auto=compress&q=65&w=300',
    alt: 'Casper products',
    options: [
      {
        id: 1,
        text: 'View all products',
        link: 'https://casper.com/ca/en/products/',
        icon: 'globe',
      },
      { id: 2, text: 'Contact a rep', link: '#', icon: 'envelope', isExternal: true },
    ],
  },
];

export default cards;
