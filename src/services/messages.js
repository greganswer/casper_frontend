/**
 * Return an array of messages between the user and the bot
 * @return {Array} list of messages
 */
const messages = () => [
  { id: 1, owner: 'bot', text: 'Hello there and welcome to Casper. I am CasperBot' },
  {
    id: 2,
    owner: 'bot',
    text:
      'I was built a very talented developer named <a href="http://greganswer.com">Greg Answer</a> who loves his Casper mattress.',
  },
  {
    id: 3,
    owner: 'bot',
    image: 'http://heydoyou.com/wp-content/uploads/2016/04/e59f99c255a2cb8499d57924f1f1dae7.jpg',
  },
  { id: 4, owner: 'user', text: 'Hello CasperBot' },
  { id: 5, owner: 'bot', text: 'Hello my friend!' },
  { id: 6, owner: 'bot', text: 'How may I assist you today?' },
];

export default messages;
