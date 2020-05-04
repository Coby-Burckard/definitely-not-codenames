import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AppRouter from './routers/AppRouter';

const App = () => {
  const dispatch = useDispatch();

  let backendHost = '';

  if (backendHost === 'heroku') {
    backendHost = 'serene-headland-98871.herokuapp.com/';
  } else {
    backendHost = 'localhost';
  }

  useEffect(() => {
    dispatch({type: 'WS_CONNECT', host: `ws://${backendHost}:8080`});
  }, [dispatch, backendHost]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
