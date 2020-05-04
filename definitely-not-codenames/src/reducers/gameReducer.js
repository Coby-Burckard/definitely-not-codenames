import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  cards: null,
  turnColor: null,
  hintWord: null,
  max: null,
  guessed: null,
};

const gameReducer = createReducer(initialState, {
  SET_GAME_STATE: (state, action) => {
    const {game} = action;

    state.cards = game.cards;
    state.turnColor = game.turnColor;
    state.hintWord = game.hintWord;
    state.max = game.max;
    state.guessed = game.guessed;
  },
});

export default gameReducer;
