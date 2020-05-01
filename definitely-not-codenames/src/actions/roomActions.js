import {wsSend} from './webSocketActions';

const setRoom = roomID => ({
  type: 'SET_ROOM',
  roomID,
});

const startGetRoom = () => dispatch => {
  dispatch(wsSend({type: 'CREATE_ROOM'}));
};

export {setRoom, startGetRoom};
