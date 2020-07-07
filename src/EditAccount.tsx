import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from './state';

export default function EditAccount() {
  const { user } = useAppState();
  const history = useHistory();

  if (!user) history.push('/');

  return (
    <div>
      <h1>Edit User Page</h1>
      <div>Email <input>{user?.name}</input></div>
      <div>Old Password <input></input></div>
      <div>New Password <input></input></div>
    </div>
  );
}
