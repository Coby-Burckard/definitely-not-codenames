import React from 'react';
import RequestRoom from './RequestRoom';
import JoinRoom from './JoinRoom';
import GameCardDisabled from './GameCardDisabled';
import CARDS from '../constants/homePage';
import JoinRoomModal from './JoinRoomModal';

const HomePage = () => {
  return (
    <div>
      <JoinRoomModal />
      <div className="hint WHITE">
        <p className="hint__home-page-title">Codenames</p>
      </div>
      <div className="game-grid__container">
        {CARDS.map((card, i) => {
          switch (i) {
            case 11: // The card index
              return <RequestRoom />;
            case 13:
              return <JoinRoom />;
            default:
              return <GameCardDisabled card={card} index={i} key={card.word} />;
          }
        })}
      </div>
    </div>
  );
};

export default HomePage;