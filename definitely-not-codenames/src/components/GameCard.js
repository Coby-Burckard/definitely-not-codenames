import React from 'react';
import {useDispatch} from 'react-redux';

const GameCard = ({card, i}) => {
  const dispatch = useDispatch();

  return (
    <button className="game-grid__card" type="button">
      <p>{card.word}</p>
    </button>
  );
};

export default GameCard;
