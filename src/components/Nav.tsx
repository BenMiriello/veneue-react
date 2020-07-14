import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

import { useAppState } from '../state';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {flexGrow: 1},
    title: {flexGrow: 1},
    container: {
      backgroundColor: theme.palette.background.default,
    },
    toolbar: {
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    rightButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        marginLeft: '2.2em',
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      maxWidth: 200,
    },
    loadingSpinner: {
      marginLeft: '1em',
    },
    displayName: {
      margin: '1.1em 0.6em',
      minWidth: '200px',
      fontWeight: 600,
    },
    button: {
      color: 'black',
      background: 'white',
      margin: '0.8em 0 0.7em',
      textTransform: 'none',
    },
    joinButton: {
      margin: '1em',
    },
  })
);

export default function Nav() {
  const classes = useStyles();
  const history = useHistory();
  const { user, checkLoggedIn, logout } = useAppState();

  useEffect(() => { checkLoggedIn() }, []);

  const handleLogout = () => { logout(); history.push('/') };

  const loggedIn = (
    <>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Link className={"Nav-link"} to="/account">
        <Typography className={classes.title} variant="h6" >
          {user?.name}
        </Typography>
      </Link>
    </>
  );

  const notLoggedIn = (
    <>
      <Link className="Nav-link" to="/login">
        <Button className={classes.button} variant="contained" color="primary">
          Sign In
        </Button>
      </Link>
      <Link className="Nav-link" to="/signup">
        <Button className={classes.button} variant="contained" color="primary">
          Signup
        </Button>
      </Link>
    </>
  );

  return (
    <div className={classes.root} >
      <AppBar className={classes.container} position="static" >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className="Nav-brand">
            <img src="logo.svg" color="inherit" className="Nav-logo" alt="blank" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className="Nav-link" to="/dashboard">
              Dashboard
            </Link>
          </Typography>
          <div className={classes.rightButtonContainer}>
            {user ? loggedIn : notLoggedIn}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
