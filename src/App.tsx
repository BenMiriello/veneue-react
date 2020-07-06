import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppStateProvider from './state';
import Nav from './Nav';
import Dashboard from './Dashboard';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import Logout from './Logout';

export default function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/logout" component={Logout} exact />
        </Switch>
      </BrowserRouter>
    </AppStateProvider>
  );
}
