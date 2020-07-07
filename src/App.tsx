import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppStateProvider from './state';
import Nav from './Nav';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import EditAccount from './EditAccount';

export default function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/account" component={UserPage} exact />
          <Route path="/account/edit" component={EditAccount} exact />
        </Switch>
      </BrowserRouter>
    </AppStateProvider>
  );
}
