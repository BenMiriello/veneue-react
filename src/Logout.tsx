import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function LogoutHandler() {
  const history = useHistory();

  useEffect(() => {
    Cookies.remove('session');
    history.push('/login');
  }, [history]);

  return <div>Logging out!</div>;
};
