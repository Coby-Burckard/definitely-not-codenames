import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isValidRoom: null,
};

const errorReducer = createReducer(initialState, {
  SET_VALID_ROOM: (state, action) => {
    const {isValid} = action.payload;
    state.isValidRoom = isValid;
  },
});

export default errorReducer;
