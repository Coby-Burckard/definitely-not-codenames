import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTeamModal} from '../actions/modalActions';

const TeamSelectionModalButton = () => {
  const dispatch = useDispatch();
  let {team} = useSelector((state) => state.user);

  if (!team) {
    team = 'TAN';
  }

  const openTeams = () => {
    dispatch(setTeamModal(true));
  };

  return (
    <button
      className={`turn-dashboard__button--${team}`}
      type="button"
      onClick={openTeams}
    >
      Teams
    </button>
  );
};

export default TeamSelectionModalButton;