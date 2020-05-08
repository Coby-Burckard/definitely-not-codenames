import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import GamePage from '../components/GamePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/game/:roomID" component={GamePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
