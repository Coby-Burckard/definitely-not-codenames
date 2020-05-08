import {wsSend} from './webSocketActions';

const startIsValidRoom = (room) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'CHECK_ROOM',
      payload: {room},
    })
  );
};

const setIsValidRoom = ({payload}) => ({
  type: 'SET_VALID_ROOM',
  payload,
});

export {startIsValidRoom, setIsValidRoom};
