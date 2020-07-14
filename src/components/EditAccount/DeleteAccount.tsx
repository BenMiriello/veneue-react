import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppState } from '../../state';

export default function DeleteAccount() {
  const history = useHistory();
  const { deleteAccount } = useAppState();

  const handleDeleteAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteAccount();
    history.push('/');
  };

  return (
    <>
      <h3>Delete My Account</h3>
      <form onSubmit={handleDeleteAccount}>
        <button>Delete My Account</button>
      </form>
    </>
  );
}
