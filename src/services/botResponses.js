import uuid from 'uuid';
import axios from 'axios';

/**
 * Process the user's input
 * @param  {string} userInput The user's userInput
 * @return {Object}
 */
async function botResponses(userInput) {
  let messages = [];

  try {
    const url = process.env.REACT_APP_CHATBOT_API_URL;
    const response = await axios.post(url, { text: userInput });
    const message = response.data.result.fulfillment.messages[0].speech;
    messages = [{ id: uuid.v1(), owner: 'bot', type: 'text', text: message }];
    console.log('message is', messages);

    return messages;
  } catch (e) {
    console.log('error is', e);

    return e;
  }
}

export default botResponses;
