import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {startJoinRoom} from '../actions/roomActions';
import ChatInput from './ChatInput';
import DisplayMessages from './DisplayMessages';
import TeamSelection from './TeamSelection';
import NameModal from './NameModal';
import GameGrid from './GameGrid';
import TurnDashboard from './TurnDashboard';
import HintContainer from './HintContainer';
import GameEndModal from './GameEndModal';

const GamePage = () => {
  const {roomID} = useParams();
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.id);
  const gameStarted = useSelector((state) => state.game.started);

  useEffect(() => {
    if (userID) {
      dispatch(startJoinRoom(roomID));
    }
  }, [dispatch, roomID, userID]);

  return (
    <div>
      <NameModal />
      <DisplayMessages />
      {gameStarted && <HintContainer />}
      {gameStarted && <GameGrid />}
      {gameStarted && <TurnDashboard />}
      <TeamSelection />
      <GameEndModal />
      <p>Chat</p>
      <ChatInput />
    </div>
  );
};

export default GamePage;
