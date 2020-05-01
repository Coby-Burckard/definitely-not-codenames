import {addMessage} from '../actions/chatActions';
import {setRoom} from '../actions/roomActions';
import {setUser} from '../actions/userActions';

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
    default:
  }
};

export default receiver;
