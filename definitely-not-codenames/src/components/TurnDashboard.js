import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {startClickPass} from '../actions/gameActions';

const TurnDashboard = () => {
  const dispatch = useDispatch();

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

  const handlePass = () => {
    dispatch(startClickPass());
  };

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
        <button
          className={`turn-dashboard__button--${turnColor}`}
          type="button"
          onClick={handlePass}
        >
          End Turn
        </button>
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
