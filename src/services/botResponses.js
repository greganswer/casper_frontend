import uuid from 'uuid';

/**
 * Process the user's input
 * @param  {string} userInput The user's userInput
 * @return {Object}
 */
async function botResponses(userInput) {
  let messages = [];

  try {
    const res = await fetch(process.env.REACT_APP_CHATBOT_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userInput }),
    });
    const data = await res.json();
    const message = data.result.fulfillment.messages[0].speech;
    messages = [{ id: uuid.v1(), owner: 'bot', type: 'text', text: message }];
    console.log('message is', messages);

    return messages;
  } catch (e) {
    console.log('error is', e);

    return e;
  }
}

export default botResponses;
