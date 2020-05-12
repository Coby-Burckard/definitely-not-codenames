import {createReducer} from '@reduxjs/toolkit';

const intialState = {
  sendRoom: false,
  joinRoom: false,
  team: false,
};

const modalReducer = createReducer(intialState, {
  SET_SEND_ROOM_MODAL: (state, action) => {
    state.sendRoom = action.isOpen;
  },
  SET_JOIN_ROOM_MODAL: (state, action) => {
    state.joinRoom = action.isOpen;
  },
  SET_TEAM_MODAL: (state, action) => {
    state.team = action.isOpen
  }
});

export default modalReducer;
