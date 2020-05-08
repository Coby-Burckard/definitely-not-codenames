import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  users: [],
  pong: null,
};

const roomReducer = createReducer(initialState, {
  SET_ROOM: (state, action) => {
    state.id = action.roomID;
  },
  SET_ROOM_USERS: (state, action) => {
    state.users = action.users;
  },
  SET_PONG : (state, action) => {
    state.pong = action.pong
  }
});

export default roomReducer;
