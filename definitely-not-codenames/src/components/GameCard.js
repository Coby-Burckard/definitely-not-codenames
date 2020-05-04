import React from 'react';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {startClickCard} from '../actions/gameActions';

const GameCard = ({card, index}) => {
  const dispatch = useDispatch();

  const handleClickCard = () => {
    dispatch(startClickCard(index));
  };

  return (
    <button
      className={classNames('game-grid__card', {
        [`game-grid__card--clicked game-grid__card--${card.color}`]: card.touched,
      })}
      type="button"
      onClick={handleClickCard}
    >
      <p>{card.word}</p>
    </button>
  );
};

export default GameCard;
