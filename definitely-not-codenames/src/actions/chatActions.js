import { wsSend } from "./webSocketActions";

const startAddMessage = (message) => {
  return (dispatch) => {
    dispatch(addMessage(message));
    dispatch(wsSend(message));
  };
};

const addMessage = (message) => ({
  type: "ADD_MESSAGE",
  message,
});

export { addMessage, startAddMessage };
