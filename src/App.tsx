import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppState from './AppState';
import Dashboard from './Dashboard';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/login" component={LoginPage} exact />
        </Switch>
      </BrowserRouter>
    </AppState>
  );
}
