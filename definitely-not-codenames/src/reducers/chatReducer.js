import {createReducer} from '@reduxjs/toolkit';

const intialState = {
  messages: [],
};

const chatReducer = createReducer(intialState, {
  ADD_MESSAGE: (state, action) => {
    state.messages.push(action.message);
  },
});

export default chatReducer;
