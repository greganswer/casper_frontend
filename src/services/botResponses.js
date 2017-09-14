import axios from 'axios';
import chatMessageFormat from './chatMessageFormat';

const CHATBOT_API_URL = process.env.REACT_APP_CHATBOT_API_URL;
const CHATBOT_ACCESS_TOKEN = process.env.REACT_APP_CHATBOT_API_ACCESS_TOKEN;
const CHATBOT_POST_URL = `${CHATBOT_API_URL}/?access_token=${CHATBOT_ACCESS_TOKEN}`;

/**
 * [randomErrorMessages description]
 * @return {[type]} [description]
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
 * @param  {string} userInput The user's userInput
 * @return {Object}
 */
async function botResponses(userInput) {
  try {
    return await axios.post(CHATBOT_POST_URL, { text: userInput });
  } catch (e) {
    const data = e.response.data;
    console.log('Error retrieving bot responses');
    console.log('data = ', JSON.stringify(data, null, 2));

    return {
      data: [chatMessageFormat(randomErrorMessages(), 'bot')],
    };
  }
}

export default botResponses;
