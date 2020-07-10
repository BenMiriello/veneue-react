import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import {
  fetchSignup,
  fetchLogin,
  fetchCheckLoggedIn,
  fetchEditAccount,
  fetchLogout,
  fetchUpdatePassword,
  fetchDeleteAccount,
  AccountData,
  LoginData,
  UpdatePasswordData,
} from './api';

export interface UserType {
  name: string;
  email: string;
}

export interface AppStateContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  signup: (data: AccountData) => void;
  login: (data: LoginData) => void;
  checkLoggedIn: () => void;
  logout: () => void;
  editAccount: (data: AccountData) => void;
  updatePassword: (data: UpdatePasswordData) => void;
  deleteAccount: () => void;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
}

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [error, _setError] = useState<Error | null>(null);

  const setError = (e: SetStateAction<Error | null>): void => {
    console.log(e);
    _setError(e);
  };

  const signup = async (data: AccountData) => {
    setLoading(true);
    await fetchSignup(data)
      .then((r) => r.json())
      .then((r) => setUser(r.user))
      .catch(setError);
    setLoading(false);
  };

  const login = async (data: LoginData) => {
    setLoading(true);
    await fetchLogin(data)
      .then((r) => r.json())
      .then((r) => setUser(r.user))
      .catch(setError);
    setLoading(false);
  };

  const checkLoggedIn = async () => {
    setLoading(true);
    await fetchCheckLoggedIn()
      .then((r) => r.json())
      .then((r) => {
        if (r.logged_in) setUser(r.user);
        else setUser(null);
      })
      .catch(setError);
    setLoading(false);
  };

  const editAccount = async (data: AccountData) => {
    setLoading(true);
    await fetchEditAccount(data)
      .then((r) => r.json())
      .then((r) => setUser(r.user))
      .catch(setError);
    setLoading(false);
  };

  const updatePassword = async (data: UpdatePasswordData) => {
    setLoading(true);
    await fetchUpdatePassword(data)
      .then(r => r.json())
      .then(r => setUser(r.user))
      .catch(setError);
    setLoading(false);
  }

  const logout = () => {
    fetchLogout();
    setUser(null);
  };

  const deleteAccount = () => {
    fetchDeleteAccount();
    setUser(null);
  };

  const contextValue: AppStateContextType = {
    loading,
    setLoading,
    user,
    setUser,
    signup,
    login,
    checkLoggedIn,
    logout,
    editAccount,
    updatePassword,
    deleteAccount,
    error,
    setError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
}

export const useAppState = () => useContext(AppStateContext);
