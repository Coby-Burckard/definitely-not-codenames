import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';

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
        <h2 className="turn-dashboard__side-title">Guesses</h2>
        <p
          className={`turn-dashboard__${turnColor} turn-dashboard__guesses-text`}
        >
          {guessedCount}
          <span> / </span>
          {clueNumber}
        </p>
      </div>
      <button
        className={`turn-dashboard__button--${turnColor}`}
        type="button"
        onClick={handlePass}
      >
        End Turn
      </button>
      <div className="turn-dashboard__side-display">
        <h2 className="turn-dashboard__side-title">Remaining</h2>
        <div className="turn-dashboard__side-text-container">
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
