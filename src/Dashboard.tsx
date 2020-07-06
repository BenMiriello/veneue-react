import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const history = useHistory();
  const handleRedirectClick = (newLocation: string) => {
    history.push(newLocation);
  };

  return (
    <div>
      This is the dashboard
      <button onClick={() => handleRedirectClick('/signup')}>Signup</button>
      <button onClick={() => handleRedirectClick('/login')}>Login</button>
    </div>
  );
}
