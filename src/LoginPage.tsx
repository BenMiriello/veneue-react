import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Handle from './handlers';

export default function LoginPage (
  { handleSubmit }: {handleSubmit: (e: FormEvent<HTMLFormElement>) => void}
) {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return(
    <form onSubmit={handleSubmit} >
      <label> Email:
        <input value={email} onChange={e => Handle.change(setEmail, e)}></input>
      </label>
      <label> Password:
        <input value={password} onChange={e => Handle.change(setPassword, e)}></input>
      </label>
      <button onClick={_ => Handle.redirect(history, '/')}>Dashboard</button>
    </form>
  )
}
