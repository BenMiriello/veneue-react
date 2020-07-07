import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from './state';
import { login } from './api';

export default function LoginPage () {
  const history = useHistory();
  const { setSessionCookie } = useAppState();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await login({email, password}).then(setSessionCookie).catch((err) => console.log(err));
    setLoading(false);
    history.push('/')
  };

  if (loading) return(
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
