import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from './state';
import { login } from './Fetch';

export default function LoginPage () {
  const history = useHistory();
  const { isLoading, setIsLoading, setSessionCookie } = useAppState();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await login(email, password).then(setSessionCookie);
    setIsLoading(false);
    history.push('/')
  };

  if (isLoading) return(
    <div>Logging In</div>
  );

  return(
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} >
        <label> Email:
          <input value={email} onChange={e => setEmail(e.target.value)}></input>
        </label>
        <label> Password:
          <input value={password} onChange={e => setPassword(e.target.value)}></input>
        </label>
        <input type="submit" value="Submit" />
        <button onClick={_ => history.push('/')}>Dashboard</button>
      </form>
    </div>
  )
};
