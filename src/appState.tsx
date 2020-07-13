import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import {
  fetchSignup,
  fetchLogin,
  fetchCheckLoggedIn,
  fetchUpdateAccount,
  fetchLogout,
  fetchUpdatePassword,
  fetchDeleteAccount,
  AccountData,
  LoginData,
  UpdatePasswordData,
} from './api';

export interface UserType { name: string; email: string; };

export interface AppStateContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  signup: (data: AccountData) => void;
  login: (data: LoginData) => void;
  checkLoggedIn: () => void;
  logout: () => void;
  updateAccount: (data: AccountData) => void;
  updatePassword: (data: UpdatePasswordData) => void;
  deleteAccount: () => void;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
};

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [error, _setError] = useState<Error | null>(null);

  const setError = (error: any) => {
    console.log(error);
    _setError(error);
  };

  const handleFetch = async (f: Promise<Response>) => {
    setLoading(true);
    f.then(r => r.json()).then(r => { console.log(r);
      setUser(r.user || null);
      if (r.errors) setError(r.errors);
    }).catch(setError);
    setLoading(false);
  };

  const contextValue: AppStateContextType = {
    loading,
    setLoading,
    user,
    setUser,
    signup: (data: AccountData) => handleFetch(fetchSignup(data)),
    login: (data: LoginData) => handleFetch(fetchLogin(data)),
    checkLoggedIn: () => handleFetch(fetchCheckLoggedIn()),
    logout: () => { fetchLogout(); setUser(null) },
    updateAccount: (data: AccountData) => handleFetch(fetchUpdateAccount(data)),
    updatePassword: (data: UpdatePasswordData) => handleFetch(fetchUpdatePassword(data)),
    deleteAccount: () => { fetchDeleteAccount(); setUser(null) },
    error,
    setError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext)
