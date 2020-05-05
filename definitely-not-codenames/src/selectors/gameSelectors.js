const RED = 'RED';
const BLUE = 'BLUE';
const GUESSER = 'GUESSER';
const MASTER = 'MASTER';

const rolesFilledSelector = (state) => {
  const {users} = state.room;

  let redMaster = false;
  let redGuesser = false;
  let blueMaster = false;
  let blueGuesser = false;

  users.forEach((gameUser) => {
    if (gameUser.team === RED && gameUser.role === MASTER) {
      redMaster = true;
    }

    if (gameUser.team === RED && gameUser.role === GUESSER) {
      redGuesser = true;
    }

    if (gameUser.team === BLUE && gameUser.role === MASTER) {
      blueMaster = true;
    }

    if (gameUser.team === BLUE && gameUser.role === GUESSER) {
      blueGuesser = true;
    }
  });

  return {
    redMasterIsFilled: redMaster,
    blueMasterIsFilled: blueMaster,
    allRolesFilled: true, // redMaster && redGuesser && blueMaster && blueGuesser,
  };
};

const selfIsHintGiver = (state) => {
  const {turnColor, mode} = state.game.gameState;
  const {role, team} = state.user;

  if (turnColor === team && role === 'MASTER' && mode === 'HINTING') {
    return true;
  }
  return false;
};

const gameStartedSelector = (state) => state.game.gameState.started;

export {rolesFilledSelector, selfIsHintGiver, gameStartedSelector};
