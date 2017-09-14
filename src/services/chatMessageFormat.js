import uuid from 'uuid';

/**
 * Process the user's text
 * @param  {string} text The sender's message
 * @param  {string} sender The the sender ot the message
 * @return {Object}
 */
export default function chatMessageFormat(text, sender = 'user') {
  const recipient = sender === 'user' ? 'bot' : 'user';

  return {
    sender: { type: sender },
    recipient: { type: recipient },
    timestamp: Date.now(),
    message: {
      mid: uuid.v1(),
      text,
    },
  };
}
