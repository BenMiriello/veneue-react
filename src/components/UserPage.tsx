import React, { ReactElement, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAppState } from '../state';

export default function UserPage(): ReactElement {
  const history = useHistory();
  const { user } = useAppState();

  useEffect(() => {
    if (!user) history.push('/');
  }, [user, history]);

  return (
    <div>
      <h1>My Profile</h1>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
      <Link to="/account/edit">Edit</Link>
    </div>
  );
}
