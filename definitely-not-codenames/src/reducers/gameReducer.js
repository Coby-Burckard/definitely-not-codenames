import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  gameState: null,
};

const gameReducer = createReducer(initialState, {
  SET_GAME_STATE: (state, action) => {
    const {game} = action;

    state.gameState = game;
  },
});

export default gameReducer;
