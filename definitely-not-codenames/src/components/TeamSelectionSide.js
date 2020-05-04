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
    <div className={`team-selection__side ${props.color}`}>
      <div className="team-selection__role-container">
        <button onClick={handleJoinTeam} type="button">
          {`Join ${props.color}`}
        </button>
        {props.guessers.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
      <div className="team-selection__role-container">
        <button
          onClick={handleAssignMaster}
          type="button"
          disabled={props.master.length > 0}
        >
          {`Become ${props.color} Master`}
        </button>
        {props.master.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default TeamSelectionSide;
