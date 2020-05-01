import {wsSend} from './webSocketActions';

const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message,
});

const startAddMessage = message => dispatch => {
  dispatch(addMessage(message));
  dispatch(wsSend({type: 'SEND_MESSAGE', payload: {message}}));
};

export {addMessage, startAddMessage};
