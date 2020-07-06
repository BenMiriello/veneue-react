import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const history = useHistory();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => history.push('/signup')}>Signup</button>
      <button onClick={() => history.push('/login')}>Login</button>
    </div>
  );
}
