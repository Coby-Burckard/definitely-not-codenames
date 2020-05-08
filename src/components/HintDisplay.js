import React from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';

const HintDisplay = () => {
  const {clueWord, clueNumber} = useSelector((state) => state.game.gameState);
  const userColor = useSelector((state) => state.user.team);
  const clueReceived = clueWord && clueNumber >= -1 && clueNumber <= 30;

  return (
    <div>
      <p
        className={classNames('hint__message', {
          'hint__message--black': userColor === null,
        })}
      >
        {clueReceived ? `${clueWord} ${clueNumber}` : 'awaiting clue...'}
      </p>
    </div>
  );
};

export default HintDisplay;
