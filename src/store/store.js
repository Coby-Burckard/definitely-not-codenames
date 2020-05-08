import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import chatReducer from '../reducers/chatReducer';

import websocketMiddleware from '../middlware/websocket';
import roomReducer from '../reducers/roomReducer';
import userReducer from '../reducers/userReducer';
import gameReducer from '../reducers/gameReducer';
import modalReducer from '../reducers/modalReducer';
import errorReducer from '../reducers/errorReducer';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    room: roomReducer,
    user: userReducer,
    game: gameReducer,
    modals: modalReducer,
    error: errorReducer,
  },
  middleware: [...getDefaultMiddleware(), websocketMiddleware],
});

export default store;
