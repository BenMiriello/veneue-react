import React from 'react';
import { useHistory } from 'react-router-dom';
import { handleRedirect } from './handlers'

export default function SignupPage() {
  const history = useHistory();

  return (
    <div>
      Signup Page
      <button onClick={() => handleRedirect(history, '/')}>Dashboard</button>
    </div>
  );
}
