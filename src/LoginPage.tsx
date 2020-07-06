import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginPage (
  { handleSubmit }: {handleSubmit: (e: FormEvent<HTMLFormElement>) => void}
) {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleRedirectClick = (newLocation: string) => {
    history.push(newLocation);
  };

  return(
    <form onSubmit={handleSubmit} >
      <label> Email:
        <input value={email} onChange={handleEmailChange}></input>
      </label>
      <label> Password:
        <input value={password} onChange={handlePasswordChange}></input>
      </label>
      <button onClick={() => handleRedirectClick('/')}>Dashboard</button>
    </form>
  )
}