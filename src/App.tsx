import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppStateProvider from './state';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import EditAccount from './components/EditAccount';
import Dashboard from './components/Dashboard';

export default function App() {

  return (
    <AppStateProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/account" component={UserPage} exact />
          <Route path="/account/edit" component={EditAccount} exact />
        </Switch>
      </BrowserRouter>
    </AppStateProvider>
  )
};
