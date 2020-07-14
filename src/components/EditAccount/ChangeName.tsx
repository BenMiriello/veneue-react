import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../state';

export default function ChangeName() {
  const history = useHistory();
  const { user, changeName, loading, setError } = useAppState();

  const [newName, setNewName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [matchError, setMatchError] = useState<boolean>(false);

  const handleChangeName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user?.name !== newName) {
      changeName({ new_name: newName, password });
      setPassword('');
      setNewName('');
      history.push('/account');
    } else {
      setError(new Error("The new name you entered is the same as your existing name."));
    }
  };

  useEffect(() => {
    if (newName.length && newName === user?.name ) {
        setMatchError(true);
    } else setMatchError(false);
  }, [newName, user]);

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
        { matchError ? <p>Your new name is the same as your existing name.</p> : <p></p>}
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
