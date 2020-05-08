import {createReducer} from '@reduxjs/toolkit';

const intialState = {
  sendRoom: false,
  joinRoom: false,
};

const modalReducer = createReducer(intialState, {
  SET_SEND_ROOM_MODAL: (state, action) => {
    state.sendRoom = action.isOpen;
  },
  SET_JOIN_ROOM_MODAL: (state, action) => {
    state.joinRoom = action.isOpen;
  },
});

export default modalReducer;
