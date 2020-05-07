import React from 'react';
import {useHistory} from 'react-router-dom';

const JoinRoom = () => {
  const history = useHistory();

  return (
    <button className="game-grid__card--home-page-button--RED" type="button">
      Join Room
    </button>
  );
};

export default JoinRoom;
