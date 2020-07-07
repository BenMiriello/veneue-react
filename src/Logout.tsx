import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppState } from './state';

export default function Logout() {
  const history = useHistory();
  const { logout } = useAppState();

  useEffect(() => {
    logout();
    history.push('/login');
  }, []);

  return <div>Logging out</div>;
};
