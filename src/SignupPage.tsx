import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState, UserType } from './state';
import { signup } from './Fetch';
import { setSessionCookie } from './sessions';

export default function SignupPage() {
  const history = useHistory();
  const { setUser, isLoading, setIsLoading } = useAppState();
  
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { jwt, user }: {jwt: string; user: UserType} = await signup(email, username, password);
    setSessionCookie(jwt);
    setUser(user);
    setIsLoading(false);
    history.push('/')
  };

  if (isLoading) return(
    <div>Creating Your Account</div>
  )

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label> Email:
          <input value={email} onChange={e => setEmail(e.target.value)}></input>
        </label>
        <label> Username:
          <input value={username} onChange={e => setUsername(e.target.value)}></input>
        </label>
        <label> Password:
          <input value={password} onChange={e => setPassword(e.target.value)}></input>
        </label>
        <input type="submit" value="Submit" />
        <button onClick={_ => history.push('/')}>Dashboard</button>
      </form>
    </div>
  );
}
