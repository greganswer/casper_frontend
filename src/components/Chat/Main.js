import React, { Component } from 'react';
import Message from './Message';

const Main = props => {
  const messages = props.messages.map(message => {
    return <Message key={message.id} {...message} />;
  });

  return (
    <div className="Chat__Window__Main">
      {messages}
    </div>
  );
};

export default Main;
