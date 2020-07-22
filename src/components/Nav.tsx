import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Menu, MenuItem, Button, IconButton, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


import { useAppState } from '../state';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {flexGrow: 1},
    title: {flexGrow: 1, margin: '0em 1.1em'},
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
      color: 'white',
      // background: 'white',
      // margin: '0.8em 0 0.7em',
      // textTransform: 'none',
      marginRight: theme.spacing(2),
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
    joinButton: {
      margin: '1em',
    },
    accountIcon: {
      // margin: '0.5em 0em'
    }
  })
);

export default function Nav() {
  const classes = useStyles();
  const history = useHistory();
  const { user, checkLoggedIn, logout } = useAppState();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => checkLoggedIn(), []);

  const handleLogout = () => { logout(); history.push('/') };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const loggedIn = (
    <>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Typography className={classes.title} variant="h6" >
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle className={classes.accountIcon} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link to="/account" className={classes.link} >
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link to="/account/edit" className={classes.link} >
                Edit Account
              </Link>
            </MenuItem>
          </Menu>
      </Typography>
    </>
  );

  const notLoggedIn = (
    <>
      <Link to="/login" className={classes.link} >
        <Button className={classes.button} variant="contained" color="primary">
          Sign In
        </Button>
      </Link>
      <Link to="/signup" className={classes.link} >
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
          <Link to="/" className={classes.link} >
            <img src="logo.svg" color="inherit" className="Nav-logo" alt="blank" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link} >
              Home
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
