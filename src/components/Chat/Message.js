import React from 'react';

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

const Message = props => {
  const className = `Chat__Window__${capitalize(props.owner)}Message`;

  return (
    <div className="Chat__Window__MessageWrapper">
      <div className={className}>
        {props.value}
      </div>
    </div>
  );
};

export default Message;
