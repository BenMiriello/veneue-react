import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppStateProvider from './state';
import Nav from './Nav';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import Logout from './Logout';
import UserPage from './UserPage';

export default function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/me" component={UserPage} exact />
        </Switch>
      </BrowserRouter>
    </AppStateProvider>
  );
}
