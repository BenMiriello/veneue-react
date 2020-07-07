import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from './state';
import { signup } from './api';

export default function SignupPage() {
  const history = useHistory();
  const { setSession, handleSetError } = useAppState();
  
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    signup({email, name, password}).then(setSession).catch(handleSetError);
    setLoading(false);
    history.push('/')
  };

  if (loading) return(
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
          <input value={name} onChange={e => setName(e.target.value)}></input>
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
