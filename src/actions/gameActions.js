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

const startNewGame = () => (dispatch) => {
  dispatch(
    wsSend({
      type: 'START_NEW_GAME',
      payload: {},
    })
  );
};

const startPing = (ping) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'PING',
      payload: {data: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'}
    })
  )
}

const setPong = ({pong}) => ({
  type: 'SET_PONG',
  pong
})

export {
  setGameState,
  startClickCard,
  startSetClue,
  startClickPass,
  startNewGame,
  startPing,
  setPong
};
