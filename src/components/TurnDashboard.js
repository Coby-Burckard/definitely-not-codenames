import React from 'react';
import {useSelector} from 'react-redux';

import TeamSelectionModalButton from './TeamSelectionModalButton'
import EndTurnButton from './EndTurnButton';

const TurnDashboard = () => {

  const {turnColor} = useSelector((state) => state.game.gameState);

  let {
    guessedCount,
    clueNumber,
    redClickedCount,
    blueClickedCount,
  } = useSelector((state) => state.game.gameState);

  const hasInfiniteGuesses = clueNumber === 0 || clueNumber === -1;

  if (clueNumber) {
    clueNumber += 1;
  } else {
    clueNumber = '-';
    guessedCount = '-';
  }

  return (
    <div className="turn-dashboard">
      <div className="turn-dashboard__side-display">
        <span className="turn-dashboard__side-title">Guesses</span>
        <span
          className={`turn-dashboard__${turnColor} turn-dashboard__guesses-text`}
        >
          {hasInfiniteGuesses && <span>∞</span>}
          {!hasInfiniteGuesses && (
            <span>
              {guessedCount}
              <span>/</span>
              {clueNumber}
            </span>
          )}
        </span>
      </div>
      <div className="turn-dashboard__side-display">
        <EndTurnButton />
      </div>
      <div className="turn-dashboard__side-display">
        <TeamSelectionModalButton />
      </div>
      <div className="turn-dashboard__side-display">
        <div className="turn-dashboard__side-text-container">
          <span className="turn-dashboard__side-title">Remaining</span>
          <span className="turn-dashboard__RED turn-dashboard__remaining-text">
            {9 - redClickedCount}
          </span>
          <span className="turn-dashboard__BLUE turn-dashboard__remaining-text">
            {8 - blueClickedCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TurnDashboard;
