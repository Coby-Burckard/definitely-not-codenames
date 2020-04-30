import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import chatReducer from "../reducers/chatReducer";

import websocketMiddleware from "../middlware/websocket";

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
  middleware: [...getDefaultMiddleware(), websocketMiddleware],
});

export default store;
