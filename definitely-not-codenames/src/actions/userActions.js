import {wsSend} from './webSocketActions';

const setUser = (userID) => ({
  type: 'SET_USER',
  userID,
});

const setName = (name) => ({
  type: 'SET_NAME',
  name,
});

const startSetName = (name) => (dispatch) => {
  dispatch(setName(name));
  dispatch(
    wsSend({
      type: 'ASSIGN_NAME',
      payload: {name},
    })
  );
};

export {setUser, setName, startSetName};
