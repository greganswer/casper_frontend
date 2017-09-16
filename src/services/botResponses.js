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
  const random = Math.random();

  if (random <= 0.33) {
    return "⚠\nI'm sorry, I'm having trouble communicating with my server at the moment.\n\nPlease contact my developer and try again later.";
  } else if (random >= 0.66) {
    return "⚠\nUh oh! It looks like I'm not feeling well 😵 \n\nPlease let my creator know and try again later.";
  }

  return '⚠\nI seem to be under the weather right now 😷 \n\nPlease tell my creators so they can fix me up.';
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
    console.log('Error retrieving bot responses');
    console.log('e = ', JSON.stringify(e, null, 2));

    return {
      data: [formatChatMessage('bot', { text: randomErrorMessages() })],
    };
  }
}
