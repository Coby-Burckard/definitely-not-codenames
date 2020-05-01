import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import chatReducer from '../reducers/chatReducer';

import websocketMiddleware from '../middlware/websocket';
import roomReducer from '../reducers/roomReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    room: roomReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware(), websocketMiddleware],
});

export default store;
