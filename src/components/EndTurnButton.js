import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classnames from 'classnames'
import {startClickPass} from '../actions/gameActions';

const EndTurnButton = () => {

  const dispatch = useDispatch()

  const {turnColor, mode} = useSelector((state) => state.game.gameState);
  const {team, role} = useSelector((state) => state.user)

  const canClickPass = (role === 'GUESSER' && mode === 'GUESSING' && turnColor === team);

  const handlePass = () => {
    if (canClickPass) {
      dispatch(startClickPass());
    }
  };

  console.log('turnColor', role, 'mode', mode, 'team', team)

  return(
    <button
      className={classnames(`turn-dashboard__button--${turnColor}`,{
        'disabled-button': !canClickPass
      })}
      type="button"
      onClick={handlePass}
    >
      End Turn
    </button>
  )
}

export default EndTurnButton;