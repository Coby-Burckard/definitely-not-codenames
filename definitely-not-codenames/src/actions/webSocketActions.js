const wsSend = (message) => ({
  type: "WS_SEND",
  message,
});

const wsGetRoom = () => ({
  type: "WS_GET_ROOM",
});

export { wsSend, wsGetRoom };
