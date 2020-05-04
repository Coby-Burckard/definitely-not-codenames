import {wsSend} from './webSocketActions';

const setUser = (userID) => ({
  type: 'SET_USER',
  userID,
});

const updateUser = (users) => ({
  type: 'UPDATE_USER',
  users,
});

const startSetName = (name) => (dispatch) => {
  dispatch(
    wsSend({
      type: 'ASSIGN_NAME',
      payload: {name},
    })
  );
};

export {setUser, updateUser, startSetName};
