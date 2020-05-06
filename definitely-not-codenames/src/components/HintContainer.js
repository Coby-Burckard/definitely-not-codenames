import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import {selfIsHintGiver, gameStartedSelector} from '../selectors/gameSelectors';
import HintInput from './HintInput';
import HintDisplay from './HintDisplay';
import StartGame from './StartGame';
import StartNewGame from './StartNewGame';

const HintContainer = () => {
  const {turnColor, mode} = useSelector((state) => state.game.gameState);
  const userColor = useSelector((state) => state.user.team);

  const amHintGiver = useSelector(selfIsHintGiver);
  const started = useSelector(gameStartedSelector);
  const ended = mode === 'RED' || mode === 'BLUE';

  return (
    <div
      className={classNames('hint', {
        RED: turnColor === 'RED' || (!started && userColor === 'RED'),
        BLUE: turnColor === 'BLUE' || (!started && userColor === 'BLUE'),
        TAN: !userColor,
      })}
    >
      {ended && <StartNewGame />}
      {!started && <StartGame />}
      {started && amHintGiver && !ended && <HintInput />}
      {started && !amHintGiver && !ended && <HintDisplay />}
      {}
    </div>
  );
};

export default HintContainer;
