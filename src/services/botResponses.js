import uuid from 'uuid';

/**
 * Process the user's input
 * @param  {string} userInput The user's userInput
 * @return {Object}
 */
function botResponses(userInput) {
  let messages = [];
  fetch(process.env.REACT_APP_CHATBOT_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: userInput }),
  })
    .then(res => res.json())
    .then((data) => {
      const message = data.result.fulfillment.messages[0].speech;
      messages = [{ id: uuid.v1(), owner: 'bot', type: 'text', text: message }];
      console.log('data is', messages);

      return messages;
    })
    .catch(error => console.log('error is', error));

  console.log('messages is', messages);

  return messages;
}

export default botResponses;
