import React from 'react';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';
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
      <div className="team-selection__guesser-container">
        <button
          type="button"
          className={classNames('team-selection__label', {
            'team-selection__label--RED': isRedTeam,
          })}
          onClick={handleJoinTeam}
        >
          {`Join ${isRedTeam ? 'Red' : 'Blue'} Team`}
        </button>
        <ul className="team-selection__user-list">
          {props.guessers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className="team-selection__master-container">
        <button
          onClick={handleAssignMaster}
          type="button"
          disabled={props.master.length > 0}
          className={classNames('team-selection__label', {
            'team-selection__label--RED': isRedTeam,
            'disabled-button': props.master.length > 0,
          })}
        >
          Become Spymaster
        </button>
        {master && (
          <span className="team-selection__master-name">{master.name}</span>
        )}
      </div>
    </div>
  );
};

export default TeamSelectionSide;
