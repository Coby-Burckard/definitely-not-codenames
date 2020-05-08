import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';

const GameCard = ({card}) => {
  const role = useSelector((state) => state.user.role);

  return (
    <button
      className={classNames('game-grid__card', {
        'game-grid__card--unclicked': !card.touched && role !== 'MASTER',
        [`game-grid__card--opaque-${card.color}`]:
          role === 'MASTER' && card.touched,
        [`game-grid__card--${card.color}`]: card.touched || role === 'MASTER',
      })}
      type="button"
    >
      <p>{card.word}</p>
    </button>
  );
};

export default GameCard;
