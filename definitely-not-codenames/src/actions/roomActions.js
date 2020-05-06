import {wsSend} from './webSocketActions';

const setRoom = (roomID) => ({
  type: 'SET_ROOM',
  roomID,
});

const startJoinRoom = (roomID) => (dispatch) => {
  dispatch(wsSend({type: 'JOIN_ROOM', payload: {id: roomID}}));
  dispatch(setRoom(roomID));
};

const startGetRoom = () => (dispatch) => {
  dispatch(wsSend({type: 'CREATE_ROOM'}));
};

const setRoomUsers = (users) => ({
  type: 'SET_ROOM_USERS',
  users,
});

const startAssignTeam = (team) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'ASSIGN_TEAM',
      payload: {
        team,
      },
    })
  );
};

const startAssignRole = (role) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'ASSIGN_ROLE',
      payload: {
        role,
      },
    })
  );
};

const startStartGame = () => (dispatch) => {
  dispatch(
    wsSend({
      type: 'START_GAME',
      payload: {},
    })
  );
};

const startNewGame = () => (dispatch) => {
  dispatch(
    wsSend({
      type: 'START_NEW_GAME',
      payload: {},
    })
  );
};

export {
  setRoom,
  startJoinRoom,
  startGetRoom,
  setRoomUsers,
  startAssignTeam,
  startAssignRole,
  startStartGame,
  startNewGame,
};
