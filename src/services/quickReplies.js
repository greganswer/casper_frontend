/**
 * Return an array of quick replies for the user to click
 * @return {Array} list of quickReplies
 */
const quickReplies = () => [
  {
    id: 1,
    alt: 'Lovely face',
    text: 'Talk to Sarah',
    image:
      'https://i.pinimg.com/736x/b5/a6/3b/b5a63b0da8d66df3dd10f269be70ea88--always-smile-face-oil.jpg',
  },
  { id: 2, content_type: 'Send Location', icon: 'map-marker' },
  { id: 3, text: 'More Info' },
  { id: 4, text: 'Other options', icon: 'ellipsis-v', iconClass: 'red' },
  { id: 5, text: 'Red', icon: 'check', iconClass: 'red' },
  { id: 6, text: 'Green', icon: 'check', iconClass: 'green' },
  { id: 7, text: 'Blue', icon: 'check', iconClass: 'blue' },
];

export default quickReplies;
