import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  id: null,
};

const roomReducer = createReducer(initialState, {
  SET_ROOM: (state, action) => {
    state.id = action.roomID;
  },
});

export default roomReducer;
