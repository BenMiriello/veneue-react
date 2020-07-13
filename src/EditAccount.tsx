import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from './appState';

export default function EditAccount() {
  const { user, checkLoggedIn, updateAccount, deleteAccount, updatePassword, loading } = useAppState();
  const history = useHistory();

  const [email, setEmail] = useState<string>(user?.email || '');
  const [name, setName] = useState<string>(user?.name || '');
  const [password, setPassword] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  useEffect(() => {
    if (user) checkLoggedIn();
    else history.push('/');
  }, []);

  const resetFields = () => {
    setEmail(user?.email || '');
    setName(user?.name || '');
    setOldPassword('');
    setNewPassword('');
    setPassword('');
  }

  const handleUpdateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateAccount({ email, password, name });
    resetFields();
    history.push('/account');
  };

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updatePassword({old_password: oldPassword, new_password: newPassword});
    resetFields();
    history.push('/account');
  };

  const handleDeleteAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await deleteAccount();
    resetFields();
    history.push('/');
  };

  if (loading) return(
    <div>Updating your account</div>
  );

  return (
    <div>
      <h1>Edit My Account</h1>
      <form onSubmit={handleUpdateAccount}>
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          name="name"
          value={name}
        ></input>
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          name="email"
          value={email}
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

      <h3>Change My Password</h3>
      <form onSubmit={handleUpdatePassword}>
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
        <input type="submit" value="Submit"></input>
      </form>

      <h3>Delete My Account</h3>
      <form onSubmit={handleDeleteAccount}><button>Delete My Account</button></form>
    </div>
  );
}
