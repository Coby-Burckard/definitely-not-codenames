import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import {selfIsHintGiver, gameStartedSelector} from '../selectors/gameSelectors';
import HintInput from './HintInput';
import HintDisplay from './HintDisplay';
import StartGame from './StartGame';

const HintContainer = () => {
  const turnColor = useSelector((state) => state.game.gameState.turnColor);
  const amHintGiver = useSelector(selfIsHintGiver);
  const started = useSelector(gameStartedSelector);
  const userColor = useSelector((state) => state.user.team);

  return (
    <div
      className={classNames('hint', {
        RED: turnColor === 'RED' || (!started && userColor === 'RED'),
        BLUE: turnColor === 'BLUE' || (!started && userColor === 'BLUE'),
        TAN: !userColor,
      })}
    >
      {!started && <StartGame />}
      {started && amHintGiver && <HintInput />}
      {started && !amHintGiver && <HintDisplay />}
    </div>
  );
};

export default HintContainer;
