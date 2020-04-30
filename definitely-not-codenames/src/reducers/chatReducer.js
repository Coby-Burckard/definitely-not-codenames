import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  message: [],
};

const chatReducer = createReducer(intialState, {
  SET_MESSAGE: (state, action) => {
    state.message.push(action.payload);
  },
});

export default chatReducer;
