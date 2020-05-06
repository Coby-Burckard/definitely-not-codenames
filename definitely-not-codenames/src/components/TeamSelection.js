import React from 'react';
import {useSelector} from 'react-redux';
import TeamSelectionSide from './TeamSelectionSide';

const TeamSelection = () => {
  const gameUsers = useSelector((state) => state.room.users);

  // breaking into teams and roles
  const redMaster = gameUsers.filter(
    (user) => user.team === 'RED' && user.role === 'MASTER'
  );
  const blueMaster = gameUsers.filter(
    (user) => user.team === 'BLUE' && user.role === 'MASTER'
  );
  const redGuessers = gameUsers.filter(
    (user) => user.team === 'RED' && user.role === 'GUESSER'
  );
  const blueGuessers = gameUsers.filter(
    (user) => user.team === 'BLUE' && user.role === 'GUESSER'
  );
  const unassinged = gameUsers.filter((user) => !user.team || !user.role);

  return (
    <div className="team-selection">
      <div className="team-selection__container">
        <TeamSelectionSide
          color="RED"
          guessers={redGuessers}
          master={redMaster}
        />
        <div className="team-selection__unassigned-container">
          {unassinged.map((user) => (
            <p className="team-selection__unassigned" key={user.id}>
              {user.name}
            </p>
          ))}
        </div>
        <TeamSelectionSide
          color="BLUE"
          guessers={blueGuessers}
          master={blueMaster}
        />
      </div>
    </div>
  );
};

export default TeamSelection;
