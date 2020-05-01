import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  id: null,
};

const userReducer = createReducer(initialState, {
  SET_USER: (state, action) => {
    state.id = action.userID;
  },
});

export default userReducer;
