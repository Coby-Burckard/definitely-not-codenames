import React from 'react';
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {startClickCard} from '../actions/gameActions';

const GameCard = ({card, index}) => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.user.role);
  const isMaster = role === 'MASTER';
  const shouldShowColor = card.touched || isMaster;
  const shouldShowOpaque = card.touched && isMaster;

  const handleClickCard = () => {
    dispatch(startClickCard(index));
  };

  return (
    <button
      className={classNames('game-grid__card', {
        'game-grid__card--show-back': shouldShowColor,
      })}
      type="button"
      onClick={handleClickCard}
    >
      <div
        className={classNames('game-grid__card-face', {
          'game-grid__card--clickable': !card.touched && !isMaster,
        })}
      >
        {card.word}
      </div>
      <div
        className={classNames(
          'game-grid__card-face',
          'game-grid__card-back',
          `game-grid__card--${card.color}`,
          {
            'game-grid__card--opaque': shouldShowOpaque,
          }
        )}
      >
        {card.word}
      </div>
    </button>
  );
};

export default GameCard;
