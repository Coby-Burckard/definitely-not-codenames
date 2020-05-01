import React from "react";
import { useDispatch } from "react-redux";
import {startGetRoom} from "../actions/roomActions";

const RequestRoom = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startGetRoom());
  };

  return (
    <div>
      <button onClick={handleClick}>Get room id</button>
    </div>
  );
};

export default RequestRoom
