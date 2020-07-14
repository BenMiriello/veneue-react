import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => history.push('/signup')}>Signup</button>
      <button onClick={() => history.push('/login')}>Login</button>
    </div>
  );
}
