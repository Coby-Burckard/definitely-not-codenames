import React from 'react';
import {useDispatch} from 'react-redux';
import {startAssignTeam, startAssignRole} from '../actions/roomActions';

const TeamSelectionSide = (props) => {
  const dispatch = useDispatch();

  const handleJoinTeam = () => {
    dispatch(startAssignTeam(props.color));
    dispatch(startAssignRole('GUESSER'));
  };

  const handleAssignMaster = (e) => {
    e.stopPropagation();
    dispatch(startAssignTeam(props.color));
    dispatch(startAssignRole('MASTER'));
  };

  const isRedTeam = props.color === 'RED';

  const master = props.master[0];

  return (
    <div className={`team-selection__side ${props.color}`}>
      <button
        className="team-selection__guesser-container"
        onClick={handleJoinTeam}
        type="button"
      >
        <span type="button" className="team-selection__label">
          {`${isRedTeam ? 'Red' : 'Blue'} Team`}
        </span>
        <ul className="team-selection__user-list">
          {props.guessers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </button>
      <div className="team-selection__master-container">
        <button
          onClick={handleAssignMaster}
          type="button"
          disabled={props.master.length > 0}
          className="team-selection__master-button"
        >
          {master ? 'Spymaster:' : 'Become Spymaster'}
        </button>
        {master && (
          <span className="team-selection__master-name">{master.name}</span>
        )}
      </div>
    </div>
  );
};

export default TeamSelectionSide;
