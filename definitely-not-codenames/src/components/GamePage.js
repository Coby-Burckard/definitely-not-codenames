import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ChatInput from './ChatInput';
import DisplayMessages from './DisplayMessages';
import {startJoinRoom} from '../actions/roomActions';

const GamePage = () => {
  const {roomID} = useParams();
  const dispatch = useDispatch();
  const userID = useSelector(state => state.user.id);

  useEffect(() => {
    if (userID) {
      dispatch(startJoinRoom(roomID));
    }
  }, [dispatch, roomID, userID]);

  return (
    <div>
      <p>GamePage</p>
      <p>
        Room:
        {roomID}
      </p>
      <p>
        User:
        {userID}
      </p>
      <ChatInput />
      <DisplayMessages />
    </div>
  );
};

export default GamePage;
