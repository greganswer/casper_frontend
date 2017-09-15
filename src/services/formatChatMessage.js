const uuid = require('uuid');

/**
 * Return a formatted chat message object
 * @param  {string} sender The the sender of the message
 * @param  {Object} message The sender's message object
 * @return {Object}
 */
module.exports = function formatChatMessage(sender, message) {
  const recipient = sender === 'user' ? 'bot' : 'user';

  const data = {
    sender: { type: sender },
    recipient: { type: recipient },
    timestamp: Date.now(),
    message,
  };
  data.message.mid = uuid.v1();

  return data;
};
