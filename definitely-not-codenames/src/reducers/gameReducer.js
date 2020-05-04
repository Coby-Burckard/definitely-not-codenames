import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  gameState: null,
  started: false,
};

const gameReducer = createReducer(initialState, {
  SET_GAME_STATE: (state, action) => {
    const {game} = action;

    state.gameState = game;
    state.started = true;
  },
});

export default gameReducer;
