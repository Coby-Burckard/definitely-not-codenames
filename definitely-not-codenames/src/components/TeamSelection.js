import React from "react";
import TeamSelectionSide from "./TeamSelectionSide";
import { useSelector } from "react-redux";

const TeamSelection = () => {
  const gameUsers = useSelector(state => state.room.users);

  //breaking into teams and roles
  const redMaster = gameUsers.filter(
    user => user.team === "RED" && user.role === "MASTER"
  );
  const blueMaster = gameUsers.filter(
    user => user.team === "BLUE" && user.role === "MASTER"
  );
  const redGuessers = gameUsers.filter(
    user => user.team === "RED" && user.role === "GUESSER"
  );
  const blueGuessers = gameUsers.filter(
    user => user.team === "BLUE" && user.role === "GUESSER"
  );
  const unassinged = gameUsers.filter(user => !user.team || !user.role);

  return (
    <div>
      <TeamSelectionSide
        color="RED"
        guessers={redGuessers}
        master={redMaster}
      />
      <div>
        <p>Unassigned</p>
        {unassinged.map(user => (
          <p>{user.id}</p>
        ))}
      </div>
      <TeamSelectionSide
        color="BLUE"
        guessers={blueGuessers}
        master={blueMaster}
      />
    </div>
  );
};

export default TeamSelection;
