import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  room: false,
};

const roomReducer = createReducer(initialState, {
  SET_ROOM: (state, action) => {
    state.room = action.roomID;
  },
});

export default roomReducer;
