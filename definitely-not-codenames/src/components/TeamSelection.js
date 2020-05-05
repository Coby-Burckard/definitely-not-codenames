import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {startStartGame} from '../actions/roomActions';
import TeamSelectionSide from './TeamSelectionSide';
import {
  rolesFilledSelector,
  gameStartedSelector,
} from '../selectors/gameSelectors';

const TeamSelection = () => {
  const dispatch = useDispatch();
  const gameUsers = useSelector((state) => state.room.users);
  const {allRolesFilled} = useSelector(rolesFilledSelector);
  const started = useSelector(gameStartedSelector);

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

  const handleStartGame = () => {
    dispatch(startStartGame());
  };

  return (
    <div className="team-selection">
      <div className="team-selection__container">
        <TeamSelectionSide
          color="RED"
          guessers={redGuessers}
          master={redMaster}
        />
        <div>
          {!started && (
            <button
              type="button"
              onClick={handleStartGame}
              disabled={!allRolesFilled}
            >
              Start Game
            </button>
          )}
          <p>Unassigned:</p>
          {unassinged.map((user) => (
            <p key={user.id}>{user.name}</p>
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
