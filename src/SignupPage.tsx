import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SignupPage() {
  const history = useHistory();
  const handleRedirectClick = (newLocation: string) => {
    history.push(newLocation);
  };

  return (
    <div>
      Signup Page
      <button onClick={() => handleRedirectClick('/')}>Dashboard</button>
    </div>
  );
}
