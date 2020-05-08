import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import {startNewGame} from '../actions/roomActions';
import {rolesFilledSelector} from '../selectors/gameSelectors';

const StartNewGame = () => {
  const dispatch = useDispatch();
  const {allRolesFilled} = useSelector(rolesFilledSelector);
  const userColor = useSelector((state) => state.user.team);

  const handleStartNewGame = () => {
    dispatch(startNewGame());
  };
  return (
    <button
      className={classNames('start-game__button', {
        'start-game__button--TAN': !userColor,
      })}
      type="button"
      onClick={handleStartNewGame}
      disabled={!allRolesFilled}
    >
      New Game
    </button>
  );
};

export default StartNewGame;
