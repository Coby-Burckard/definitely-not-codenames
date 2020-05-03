import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./routers/AppRouter";

const App = () => {
  const dispatch = useDispatch();

  // digital ocean = 159.65.253.179

  useEffect(() => {
    dispatch({ type: "WS_CONNECT", host: "ws://localhost:8080" });
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
