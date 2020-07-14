import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from './appState';

export default function ChangeName() {
  const history = useHistory();
  const { changeName, loading } = useAppState();

  const [newName, setNewName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeName({ new_name: newName, password });
    setPassword('');
    setNewName('');
    history.push('/account');
  };

  if (loading) return <div>Changing Your Name</div>;

  return (
    <>
      <h4>Change Name</h4>
      <form onSubmit={handleChangeName}>
        <label>New Name</label>
        <input
          onChange={(e) => setNewName(e.target.value)}
          placeholder="new name"
          name="new name"
          value={newName}
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
