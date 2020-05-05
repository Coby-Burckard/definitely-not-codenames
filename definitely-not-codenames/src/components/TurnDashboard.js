import React from 'react';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {startClickPass} from '../actions/gameActions';

const TurnDashboard = () => {
  const dispatch = useDispatch();

  const handlePass = () => {
    dispatch(startClickPass());
  };

  return (
    <div className="turn-dashboard">
      <button type="button" onClick={handlePass}>
        End Turn
      </button>
    </div>
  );
};

export default TurnDashboard;
