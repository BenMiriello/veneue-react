import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../state';

export default function ChangeEmail() {
  const history = useHistory();
  const { changeEmail, loading } = useAppState();

  const [newEmail, setNewEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeEmail({ new_email: newEmail, password });
    setPassword('');
    setNewEmail('');
    history.push('/account');
  };

  if (loading) return <div>Updating Your Email</div>;
  
  return (
    <>
      <h4>Update Email Address</h4>
      <form onSubmit={handleChangeEmail}>
        <label>New Email Address</label>
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          type="email"
          placeholder="email"
          name="email"
          value={newEmail}
        ></input>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          name="password"
          value={password}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
