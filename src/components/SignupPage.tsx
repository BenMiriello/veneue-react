import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../state';

export default function SignupPage() {
  const history = useHistory();
  const { signup, loading } = useAppState();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({ email, name, password });
    history.push('/');
  };

  if (loading) return <div>Creating Your Account</div>;

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input 
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
