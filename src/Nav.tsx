import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useAppState } from './appState';

export default function Nav() {
  const history = useHistory();
  const { user, checkLoggedIn, logout } = useAppState();

  useEffect(() => { checkLoggedIn() }, []);

  const handleLogout = () => { logout(); history.push('/') };

  const loggedIn = (
    <>
      <li className="Nav-item">
        <form onSubmit={handleLogout}>
          <button type="submit" className="Nav-link" >
            Logout
          </button>
        </form>
      </li>
      <li className="Nav-item">
        <Link className="Nav-link" to="/account">
          {user?.name}
        </Link>
      </li>
    </>
  );

  const notLoggedIn = (
    <>
      <li>
        <Link className="Nav-link" to="/login">
          Login
        </Link>
      </li>
      or
      <li className="Nav-item">
        <Link className="Nav-link" to="/signup">
          Signup
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
};
