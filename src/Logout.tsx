import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppState } from './state'

export default function LogoutHandler() {
  const history = useHistory();
  const { setUser } = useAppState();

  useEffect(() => {
    Cookies.remove('session');
    setUser(null);
    history.push('/login');
  }, [history]);

  return <div>Logging out!</div>;
};
