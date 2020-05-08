import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import {startStartGame} from '../actions/roomActions';
import {rolesFilledSelector} from '../selectors/gameSelectors';

const StartGame = () => {
  const dispatch = useDispatch();
  // const {allRolesFilled} = useSelector(rolesFilledSelector);
  const userColor = useSelector((state) => state.user.team);

  const handleStartGame = () => {
    dispatch(startStartGame());
  };
  return (
    <button
      className={classNames('start-game__button', {
        'start-game__button--TAN': !userColor,
      })}
      type="button"
      onClick={handleStartGame}
    >
      Start Game
    </button>
  );
};

export default StartGame;
