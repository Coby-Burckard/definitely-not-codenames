const setSendRoomModal = (isOpen) => ({
  type: 'SET_SEND_ROOM_MODAL',
  isOpen,
});

const setJoinRoomModal = (isOpen) => ({
  type: 'SET_JOIN_ROOM_MODAL',
  isOpen,
});

export {setSendRoomModal, setJoinRoomModal};
