import React from 'react';
import {useDispatch} from 'react-redux';
import {startAssignTeam, startAssignRole} from '../actions/roomActions';

const TeamSelectionSide = (props) => {
  const dispatch = useDispatch();

  const handleJoinTeam = () => {
    dispatch(startAssignTeam(props.color));
    dispatch(startAssignRole('GUESSER'));
  };

  const handleAssignMaster = () => {
    dispatch(startAssignTeam(props.color));
    dispatch(startAssignRole('MASTER'));
  };

  return (
    <div>
      <button onClick={handleJoinTeam} type="button">
        Join
        {props.color}
      </button>
      {props.guessers.map((user) => (
        <p>{user.id}</p>
      ))}
      <button onClick={handleAssignMaster} type="button">
        Become
        {props.color}
        Master
      </button>
      {props.master.map((user) => (
        <p>{user.id}</p>
      ))}
    </div>
  );
};

export default TeamSelectionSide;
