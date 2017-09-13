/**
 * Return an array of messages between the user and the bot
 * @return {Array} list of messages
 */
const messages = () => [
  {
    id: 1,
    owner: 'bot',
    type: 'text',
    text: 'Hello there and welcome to Casper. I am CasperBot',
  },
  {
    id: 2,
    owner: 'bot',
    type: 'text',
    text:
      'I was built a very talented developer named <a href="http://greganswer.com">Greg Answer</a> who loves his Casper mattress.',
  },
  {
    id: 3,
    owner: 'bot',
    type: 'image',
    alt: 'Casper sleep cartoon',
    image: 'http://heydoyou.com/wp-content/uploads/2016/04/e59f99c255a2cb8499d57924f1f1dae7.jpg',
  },
  { id: 4, owner: 'user', type: 'text', text: 'Hello CasperBot' },
  { id: 5, owner: 'bot', type: 'text', text: 'Hello my friend!' },
  { id: 6, owner: 'bot', type: 'text', text: 'How may I assist you today?' },
  { id: 7, owner: 'user', type: 'text', text: "I'd like to take a look at your products" },
  {
    id: 8,
    owner: 'bot',
    type: 'text',
    text: 'Certaintly! Here is a list of some of our products:',
  },
  {
    id: 9,
    owner: 'bot',
    type: 'cards',
    cards: [
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
        image:
          'https://casper.imgix.net/product/pip/us-pip-pillow-tile.jpg?auto=compress&q=65&w=300',
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
        image:
          'https://casper.imgix.net/product/pip/us-pip-sheets-tile.jpg?auto=compress&q=65&w=300',
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
        options: [{ id: 2, text: 'Contact a rep', link: '#', icon: 'envelope', isExternal: true }],
      },
    ],
  },
];

export default messages;
