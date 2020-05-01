import React from "react";
import { useDispatch } from "react-redux";
import wsGetRoom from "../actions/webSocketActions";

const RequestRoom = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(wsGetRoom());
  };

  return (
    <div>
      <button onClick={handleClick}>Get room id</button>
    </div>
  );
};
