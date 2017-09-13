import uuid from 'uuid';

/**
 * Process the user's text
 * @param  {string} text The user's userInput
 * @return {Object}
 */
export default function chatMessageFormat(text) {
  return {
    sender: { type: 'user' },
    recipient: { type: 'bot' },
    timestamp: Date.now(),
    message: {
      mid: uuid.v1(),
      text,
    },
  };
}
