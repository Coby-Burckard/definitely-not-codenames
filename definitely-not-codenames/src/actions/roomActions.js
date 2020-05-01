import {wsSend} from './webSocketActions';

const setRoom = roomID => ({
  type: 'SET_ROOM',
  roomID,
});

const startJoinRoom = roomID => dispatch => {
  dispatch(wsSend({type: 'JOIN_ROOM', payload: {id: roomID}}));
  dispatch(setRoom(roomID));
};

const startGetRoom = () => dispatch => {
  dispatch(wsSend({type: 'CREATE_ROOM'}));
};

export {setRoom, startJoinRoom, startGetRoom};
