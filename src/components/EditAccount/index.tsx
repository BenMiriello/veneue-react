import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../state';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import DeleteAccount from './DeleteAccount';

export default function EditAccount() {
  const { user, checkLoggedIn } = useAppState();
  const history = useHistory();

  useEffect(() => {
    if (user) checkLoggedIn();
    else history.push('/');
  }, []);

  return (
    <div>
      <ChangeEmail />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount/>
    </div>
  );
}
