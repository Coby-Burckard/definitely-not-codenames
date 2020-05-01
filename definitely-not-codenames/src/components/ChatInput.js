import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {startAddMessage} from '../actions/chatActions';

const ChatInput = () => {
  const dispatch = useDispatch();

  // hooks
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch({type: 'WS_CONNECT', host: 'ws://localhost:8080'});
  }, [dispatch]);

  // event handling
  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(startAddMessage(message));

    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
