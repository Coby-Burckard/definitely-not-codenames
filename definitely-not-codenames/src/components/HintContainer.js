import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import {selfIsHintGiver} from '../selectors/gameSelectors';
import HintInput from './HintInput';
import HintDisplay from './HintDisplay';

const HintContainer = () => {
  const turnColor = useSelector((state) => state.game.gameState.turnColor);
  const amHintGiver = useSelector(selfIsHintGiver);

  return (
    <div
      className={classNames('hint', {
        RED: turnColor === 'RED',
        BLUE: turnColor === 'BLUE',
      })}
    >
      {amHintGiver ? <HintInput /> : <HintDisplay />}
    </div>
  );
};

export default HintContainer;
