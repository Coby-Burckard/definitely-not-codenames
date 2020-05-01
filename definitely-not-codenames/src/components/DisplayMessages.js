import React from 'react';
import {useSelector} from 'react-redux';

const DisplayMessages = () => {
  const messages = useSelector(state => state.chat.messages);
  return (
    <div>
      {messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
};

export default DisplayMessages;
