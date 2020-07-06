import React from 'react';
import { Link } from 'react-router-dom';

import { useAppState } from './state';

// interface Props {}

export default function Nav() {
  const { user } = useAppState();

  return (
    <nav className="Nav">
      <div className="Nav-container">
        <Link to="/" className="Nav-brand">
          <img src="logo.svg" className="Nav-logo" alt="blank" />
        </Link>

        <div className="Nav-right">
          <ul className="Nav-item-wrapper">
            <li className="Nav-item">
              <Link className="Nav-link" to="/path1">
                Link 1
              </Link>
            </li>
            <li className="Nav-item">
              <Link className="Nav-link" to="/path2">
                Link 2
              </Link>
            </li>
            <li className="Nav-item">
              <Link className="Nav-link" to="/logout">
                Logout
              </Link>
            </li>
            {user ? <li className="Nav-item">{user.name}</li> : ''}
          </ul>
        </div>
      </div>
    </nav>
  );
};
