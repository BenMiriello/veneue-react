import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../state';

export default function ChangePassword() {
  const history = useHistory();
  const { changePassword, loading, setError } =useAppState();

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState<string>('');
  const [matchError, setMatchError] = useState<boolean>(false);

  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword === newPasswordConfirmation) {
      changePassword({ old_password: oldPassword, new_password: newPassword });
      history.push('/account');
    } else {
      setError(new Error("Your new passwords don't match."));
      setOldPassword('');
      setNewPassword('');
      setNewPasswordConfirmation('');
    };
  };

  useEffect(() => {
    if (newPassword.length && newPasswordConfirmation.length &&
      newPassword !== newPasswordConfirmation) {
        setMatchError(true);
    } else setMatchError(false);
  }, [newPassword, newPasswordConfirmation]);

  if (loading) return <div>Changing Your Password</div>;

  return (
    <>
      <form onSubmit={handleChangePassword}>
        <h4>Change Password</h4>
        <label>Old Password</label>
        <input
          onChange={(e) => setOldPassword(e.target.value)}
          type="password"
          placeholder="old password"
          name="old password"
          value={oldPassword}
        ></input>
        <label>New Password</label>
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          placeholder="new password"
          name="new password"
          value={newPassword}
        ></input>
        { matchError ? <p>new passwords need to match.</p> : <p></p>}
        <label>Confirm New Password</label>
        <input
          onChange={(e) => setNewPasswordConfirmation(e.target.value)}
          type="password"
          placeholder="new password confirmation"
          name="new password confirmation"
          value={newPasswordConfirmation}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
