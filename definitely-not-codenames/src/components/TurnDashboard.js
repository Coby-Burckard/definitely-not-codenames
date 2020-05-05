import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';

import {startClickPass} from '../actions/gameActions';

const TurnDashboard = () => {
  const dispatch = useDispatch();

  let {
    guessedCount,
    clueNumber,
    redClickedCount,
    blueClickedCount,
  } = useSelector((state) => state.game.gameState);

  if (!clueNumber) {
    clueNumber = '-';
    guessedCount = '-';
  }

  const handlePass = () => {
    dispatch(startClickPass());
  };

  return (
    <div className="turn-dashboard">
      <div className="turn-dashboard__side-display">
        <p>Guesses Used</p>
        <p>{guessedCount}</p>
        <p>Max Guesses</p>
        <p>{clueNumber + 1}</p>
      </div>
      <button
        className="turn-dashboard__button"
        type="button"
        onClick={handlePass}
      >
        End Turn
      </button>
      <div className="turn-dashboard__side-display">
        <p>Cards left</p>
        <p>{9 - redClickedCount}</p>
        <p>{8 - blueClickedCount}</p>
      </div>
    </div>
  );
};

export default TurnDashboard;
