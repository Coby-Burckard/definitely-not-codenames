import { addMessage } from "../actions/chatActions";
import { setRoom } from "../actions/roomActions";

const receiver = (dispatch, data) => {
  switch (data.type) {
    case "SEND_MESSAGE":
      dispatch(addMessage(data.message));
      break;
    case "SEND_ROOM_ID":
      console.log(data);
      dispatch(setRoom(data.roomID));
    default:
  }
};

export default receiver;
