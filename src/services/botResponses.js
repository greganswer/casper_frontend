import axios from 'axios';

const CHATBOT_API_URL = process.env.REACT_APP_CHATBOT_API_URL;
const CHATBOT_ACCESS_TOKEN = process.env.REACT_APP_CHATBOT_API_ACCESS_TOKEN;
const CHATBOT_POST_URL = `${CHATBOT_API_URL}?access_token=${CHATBOT_ACCESS_TOKEN}`;

/**
 * Process the user's input
 * @param  {string} userInput The user's userInput
 * @return {Object}
 */
async function botResponses(userInput) {
  try {
    return await axios.post(CHATBOT_POST_URL, { text: userInput });
  } catch (e) {
    console.log('Error retrieving bot responses');
    console.log('e = ', JSON.stringify(e, null, 2));

    return [];
  }
}

export default botResponses;
