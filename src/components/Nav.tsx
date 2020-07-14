import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import { useAppState } from '../state';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      <li className="Nav-item">
        <form onSubmit={handleLogout}>
          <button type="submit" className={"Nav-link"} >
            Logout
          </button>
        </form>
      </li>
      <li className="Nav-item">
        <Link className={"Nav-link"} to="/account">
          {user?.name}
        </Link>
      </li>
    </>
  );

  const notLoggedIn = (
    <>
      <li>
        <Link className="Nav-link" to="/login">
          <Button className={classes.button} variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </li>
      or
      <li className="Nav-item">
        <Link className="Nav-link" to="/signup">
          <Button className={classes.button} variant="contained" color="primary">
            Signup
          </Button>
        </Link>
      </li>
    </>
  );
  
  return (
    <nav className="Nav">
      <div className="Nav-container">
        <Link to="/" className="Nav-brand">
          <img src="logo.svg" className="Nav-logo" alt="blank" />
        </Link>
        <div className="Nav-left">
          <ul>
            <li>
              <Link className="Nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="Nav-right">
          <ul className="Nav-item-wrapper">
          {user ? loggedIn : notLoggedIn}
          </ul>
        </div>
      </div>
    </nav>
  );
}
