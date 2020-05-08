import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: null,
  role: null,
  team: null,
};

const userReducer = createReducer(initialState, {
  SET_USER: (state, action) => {
    state.id = action.userID;
  },
  UPDATE_USER: (state, action) => {
    const {users} = action;
    const self = users.find((user) => user.id === state.id);
    const {name, role, team} = self;
    state.name = name;
    state.role = role;
    state.team = team;
  },
});

export default userReducer;
