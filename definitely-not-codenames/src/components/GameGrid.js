import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GameCard from './GameCard';

const GameGrid = () => {
  const gameState = useSelector((state) => state.game.gameState);
  const dispatch = useDispatch();

  return (
    <div className="game-grid">
      <div className="game-grid__container">
        {gameState.cards.map((card, i) => {
          return <GameCard card={card} index={i} key={card.word} />;
        })}
      </div>
    </div>
  );
};

export default GameGrid;
