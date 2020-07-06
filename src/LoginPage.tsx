import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppState, UserType } from './state';
import { login } from './Fetch';
import { setSessionCookie } from './sessions';

export default function LoginPage () {
  const history = useHistory();
  const { setUser, isLoading, setIsLoading } = useAppState();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { jwt , user }: {jwt: string; user: UserType} = await login(email, password);
    setSessionCookie(jwt);
    setUser(user);
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
