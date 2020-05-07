import React from 'react';
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {startClickCard} from '../actions/gameActions';

const GameCard = ({card, index}) => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.user.role);

  const handleClickCard = () => {
    dispatch(startClickCard(index));
  };

  return (
    <button
      className={classNames('game-grid__card', {
        'game-grid__card--unclicked': !card.touched && role !== 'MASTER',
        [`game-grid__card--opaque-${card.color}`]:
          role === 'MASTER' && card.touched,
        [`game-grid__card--${card.color}`]: card.touched || role === 'MASTER',
      })}
      type="button"
      onClick={handleClickCard}
    >
      <p>{card.word}</p>
    </button>
  );
};

export default GameCard;
