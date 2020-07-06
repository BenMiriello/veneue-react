import React, { useEffect, useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useAppState } from './state';

export default function Nav() {
  const { user } = useAppState();

  const [userOptions, setUserOptions] = useState<ReactNode>(<></>)

  useEffect(() => {
    if (!user) {
      setUserOptions(
        <>
          <li>
            <Link className="Nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="Nav-item">
            <Link className="Nav-link" to="/signup">
              Signup
            </Link>
          </li>
        </>
      );
    } else {
      setUserOptions(
        <>
          <li className="Nav-item">
            <Link className="Nav-link" to="/logout">
              Logout
            </Link>
          </li>
          <li className="Nav-item">
            <Link className="Nav-link" to="/me">
              {user!.name}
            </Link>
          </li>
        </>
      );
    }
  }, [user]);
  
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
          </ul>
        </div>
        <div className="Nav-right">
          <ul className="Nav-item-wrapper">
          {userOptions}
          </ul>
        </div>
      </div>
    </nav>
  );
};
