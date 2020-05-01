import React from "react";
import { useParams } from "react-router-dom";
import ChatInput from "./ChatInput";
import DisplayMessages from "./DisplayMessages";

const GamePage = () => {
  const { id } = useParams();

  return (
    <div>
      <p>GamePage: {id} </p>
      <ChatInput />
      <DisplayMessages />
    </div>
  );
};

export default GamePage;
