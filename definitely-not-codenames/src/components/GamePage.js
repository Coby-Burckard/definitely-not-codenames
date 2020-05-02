import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startJoinRoom } from "../actions/roomActions";
import ChatInput from "./ChatInput";
import DisplayMessages from "./DisplayMessages";
import RoomUsersList from "./RoomUsersList";
import TeamSelection from "./TeamSelection";

const GamePage = () => {
  const { roomID } = useParams();
  const dispatch = useDispatch();
  const userID = useSelector(state => state.user.id);

  useEffect(() => {
    if (userID) {
      dispatch(startJoinRoom(roomID));
    }
  }, [dispatch, roomID, userID]);

  return (
    <div>
      <Link to="/">Home</Link>
      <p>GamePage</p>
      <p>
        Room:
        {roomID}
      </p>
      <p>
        User:
        {userID}
      </p>
      <p>Users in room </p>
      <RoomUsersList />
      <p>Chat</p>
      <ChatInput />
      <DisplayMessages />
      <TeamSelection />
    </div>
  );
};

export default GamePage;
