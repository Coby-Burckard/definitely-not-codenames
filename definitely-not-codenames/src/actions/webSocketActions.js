const wsSend = payload => ({
  type: 'WS_SEND',
  payload,
});

const wsGetRoom = () => ({
  type: 'WS_GET_ROOM',
});

export {wsSend, wsGetRoom};
