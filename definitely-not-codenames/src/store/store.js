import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import chatReducer from "../reducers/chatReducer";

import websocketMiddleware from "../middlware/websocket";
import roomReducer from "../reducers/roomReducer";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    room: roomReducer,
  },
  middleware: [...getDefaultMiddleware(), websocketMiddleware],
});

export default store;
