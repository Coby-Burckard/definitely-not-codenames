import React from 'react';
import {useSelector} from 'react-redux';

const HintDisplay = () => {
  const {clueWord, clueNumber} = useSelector((state) => state.game.gameState);
  const clueReceived = clueWord && clueNumber;

  return (
    <div>
      <p className="hint__message">
        {clueReceived ? `${clueWord} ${clueNumber}` : 'awaiting clue...'}
      </p>
    </div>
  );
};

export default HintDisplay;
