import React from 'react';
import { useHistory } from 'react-router-dom';
import { handleRedirect } from './handlers';

export default function Dashboard() {
  const history = useHistory();

  return (
    <div>
      This is the dashboard
      <button onClick={() => handleRedirect(history, '/signup')}>Signup</button>
      <button onClick={() => handleRedirect(history, '/login')}>Login</button>
    </div>
  );
}
