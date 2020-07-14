import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './styles/theme';

import AppStateProvider from './state';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import SignInPage from './components/SignInPage';
import UserPage from './components/UserPage';
import EditAccount from './components/EditAccount';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppStateProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/signup" component={SignupPage} exact />
            <Route path="/login" component={SignInPage} exact />
            <Route path="/account" component={UserPage} exact />
            <Route path="/account/edit" component={EditAccount} exact />
          </Switch>
        </BrowserRouter>
      </AppStateProvider>
    </MuiThemeProvider>
  )
}
