import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useIsRoomValid} from '../hooks/gamePageHooks';
import {startJoinRoom} from '../actions/roomActions';
import TeamSelection from './TeamSelection';
import NameModal from './NameModal';
import GameGrid from './GameGrid';
import TurnDashboard from './TurnDashboard';
import HintContainer from './HintContainer';
import GameEndModal from './GameEndModal';
import TeamSelectionModal from './TeamSelectionModal'
import {gameStartedSelector} from '../selectors/gameSelectors';
import SendRoomModal from './SendRoomModal';
import { usePingPong } from '../hooks/pingPong';

const GamePage = () => {
  const {roomID} = useParams();
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.id);
  const gameStarted = useSelector(gameStartedSelector);
  useIsRoomValid();
  usePingPong();

  useEffect(() => {
    if (userID) {
      dispatch(startJoinRoom(roomID));
    }
  }, [dispatch, roomID, userID]);

  return (
    <div>
      <NameModal />
      <SendRoomModal />
      <TeamSelectionModal />
      <div className="hint__container">
        <HintContainer />
      </div>
      {gameStarted && <GameGrid />}
      {gameStarted && <TurnDashboard />}
      {!gameStarted && <TeamSelection />}
      <GameEndModal />
    </div>
  );
};

export default GamePage;
