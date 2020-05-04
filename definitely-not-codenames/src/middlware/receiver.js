import {addMessage} from '../actions/chatActions';
import {setRoom, setRoomUsers} from '../actions/roomActions';
import {setUser, updateUser} from '../actions/userActions';
import {setGameState} from '../actions/gameActions';

const receiver = (dispatch, rawJSON) => {
  let data;

  try {
    data = JSON.parse(rawJSON);
  } catch {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(data.type);

  switch (data.type) {
    case 'MESSAGE_RECEIVED':
      dispatch(addMessage(data.payload.message));
      break;
    case 'ROOM_CREATED':
      dispatch(setRoom(data.payload.id));
      break;
    case 'USER_CREATED':
      dispatch(setUser(data.payload.id));
      break;
    case 'ROOM_USERS_UPDATED':
      dispatch(setRoomUsers(data.payload.users));
      dispatch(updateUser(data.payload.users));
      break;
    case 'GAME_STATE_UPDATED':
      dispatch(setGameState(data.payload.game));
      break;
    default:
  }
};

export default receiver;
