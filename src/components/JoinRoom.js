import React from 'react';
import {useDispatch} from 'react-redux';
import {setJoinRoomModal} from '../actions/modalActions';

const JoinRoom = () => {
  const dispatch = useDispatch();

  const handleJoinRoomClick = () => {
    dispatch(setJoinRoomModal(true));
  };

  return (
    <button
      className="game-grid__card--home-page-button--RED"
      type="button"
      onClick={handleJoinRoomClick}
    >
      Join Room
    </button>
  );
};

export default JoinRoom;
