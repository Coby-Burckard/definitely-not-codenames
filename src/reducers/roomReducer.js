import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  users: [],
};

const roomReducer = createReducer(initialState, {
  SET_ROOM: (state, action) => {
    state.id = action.roomID;
  },
  SET_ROOM_USERS: (state, action) => {
    state.users = action.users;
  },
});

export default roomReducer;
