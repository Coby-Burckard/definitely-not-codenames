import { wsSend } from "./webSocketActions";

const setRoom = (roomID) => ({
  type: "SET_ROOM",
  roomID
});

const startGetRoom = () => {
  return (dispatch) => {
    dispatch(wsSend({type: 'CREATE_ROOM'}))
  }
}

export { setRoom, startGetRoom };
