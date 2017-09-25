import axios from 'axios';
import formatChatMessage from './formatChatMessage';

const CHATBOT_API_URL = process.env.REACT_APP_CHATBOT_API_URL;
const CHATBOT_ACCESS_TOKEN = process.env.REACT_APP_CHATBOT_API_ACCESS_TOKEN;
const CHATBOT_POST_URL = `${CHATBOT_API_URL}/?access_token=${CHATBOT_ACCESS_TOKEN}`;

/**
 * Generate a random error message if the server is not connected
 * @return {string}
 */
const randomErrorMessages = () => {
  const possibleResponses = [
    "⚠\nI'm sorry, I'm having trouble communicating with my server at the moment.\n\nPlease contact my developer and try again later.",
    "⚠\nUh oh! It looks like I'm not feeling well 😵 \n\nPlease let my creator know and try again later.",
    '⚠\nI seem to be under the weather right now 😷 \n\nPlease tell my creators so they can fix me up.',
  ];
  const text = possibleResponses[Math.round(Math.random() * (possibleResponses.length - 1))];

  return `${text}`
};

/**
 * Process the user's input
 * @param  {string} data The user's message
 * @return {Object}
 */
export default async function botResponses(data) {
  try {
    return await axios.post(CHATBOT_POST_URL, data);
  } catch (e) {
    return {
      data: [formatChatMessage('bot', { text: randomErrorMessages() })],
    };
  }
}
