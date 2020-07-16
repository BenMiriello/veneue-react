import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import { Account, Login, ChangeEmail, ChangeName, ChangePassword } from './api';
import { signup, login, checkLoggedIn, logout, deleteAccount } from './api';
import { changeName, changeEmail, changePassword } from './api';

export interface UserType { name: string; email: string; };

export interface AppStateContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  signup: (data: Account) => void;
  login: (data: Login) => void;
  checkLoggedIn: () => void;
  logout: () => void;
  changeEmail: (data: ChangeEmail) => void;
  changeName: (data: ChangeName) => void;
  changePassword: (data: ChangePassword) => void;
  deleteAccount: () => void;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
};

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleFetch = async (f: Promise<Response>) => {
    setLoading(true);
    f.then(r => r.json())
      .then(r => {
        console.log(r);
        setUser(r.user || null);
        r.errors && setError(r.errors);
      })
      .catch(setError);
    setLoading(false);
  };

  const contextValue: AppStateContextType = {
    loading,
    setLoading,
    user,
    setUser,
    signup: (data: Account) => handleFetch(signup(data)),
    login: (data: Login) => handleFetch(login(data)),
    checkLoggedIn: () => handleFetch(checkLoggedIn()),
    logout: () => { logout(); setUser(null) },
    changeName: (data: ChangeName) => handleFetch(changeName(data)),
    changeEmail: (data: ChangeEmail) => handleFetch(changeEmail(data)),
    changePassword: (data: ChangePassword) => handleFetch(changePassword(data)),
    deleteAccount: () => { deleteAccount(); setUser(null) },
    error,
    setError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext)
