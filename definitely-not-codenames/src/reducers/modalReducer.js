import {createReducer} from '@reduxjs/toolkit';

const intialState = {
  sendRoom: false,
};

const modalReducer = createReducer(intialState, {
  SET_SEND_ROOM_MODAL: (state, action) => {
    state.sendRoom = action.isOpen;
  },
});

export default modalReducer;
