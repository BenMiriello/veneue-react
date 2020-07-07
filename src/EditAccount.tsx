import React from 'react';

import { useAppState } from './state';
import { useHistory } from 'react-router-dom';

export default function EditAccount() {
  const { user } = useAppState();
  const history = useHistory();

  if (!user) history.push('/');

  return (
    <div>
      <div>Email <input>{user!.email}</input></div>
      <div>Old Password <input></input></div>
      <div>New Password <input></input></div>
    </div>
  );
}
