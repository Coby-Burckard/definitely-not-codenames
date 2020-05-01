import { addMessage } from "../actions/chatActions";
import { setRoom } from "../actions/roomActions";

const receiver = (dispatch, rawJSON) => {
  let data

  try {
    data = JSON.parse(rawJSON)
  } catch (e) {
    console.error("Malformed data", rawJSON)
    return
  }

  switch (data.type) {
    case "SEND_MESSAGE":
      dispatch(addMessage(data.message));
      break;
    case "ROOM_CREATED":
      console.log(data);
      dispatch(setRoom(data.payload.id));
      break
    default:
  }
};

export default receiver;
