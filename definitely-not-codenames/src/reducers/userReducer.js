import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: null,
};

const userReducer = createReducer(initialState, {
  SET_USER: (state, action) => {
    state.id = action.userID;
  },
  SET_NAME: (state, action) => {
    state.name = action.name;
  },
});

export default userReducer;
