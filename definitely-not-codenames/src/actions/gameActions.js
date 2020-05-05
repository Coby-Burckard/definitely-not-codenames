import {wsSend} from './webSocketActions';

const setGameState = (game) => ({
  type: 'SET_GAME_STATE',
  game,
});

const startClickCard = (i) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'CLICK_CARD',
      payload: {i},
    })
  );
};

const startSetClue = (clueWord, clueNumber) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'SET_CLUE',
      payload: {clueWord, clueNumber},
    })
  );
};

const startClickPass = () => (dispatch) => {
  dispatch(
    wsSend({
      type: 'CLICK_PASS',
      payload: {},
    })
  );
};

export {setGameState, startClickCard, startSetClue, startClickPass};
