import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import fetchApi, { Account, Login, ChangeEmail, ChangeName, ChangePassword, FetchBody } from './fetchApi';

export interface UserType { name: string; email: string; };

export interface AppStateContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  signup: (data: Account) => void;
  login: (data: Login) => void;
  checkLoggedIn: () => void;
  changeEmail: (data: ChangeEmail) => void;
  changeName: (data: ChangeName) => void;
  changePassword: (data: ChangePassword) => void;
  logout: () => void;
  deleteAccount: () => void;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
};

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleFetch = async (endpoint?: string, method: string = 'GET', data?: FetchBody) => {
    if (data) {
      setLoading(true);
      fetchApi(endpoint, method, data)
        .then(r => r.json())
        .then(r => {
          console.log(r);
          setUser(r.user || null);
          r.errors && setError(r.errors);
        })
        .catch(setError);
      setLoading(false);
    } else {
      fetchApi(endpoint, method);
      if (endpoint === 'logout' || 'delete_account') setUser(null);
    };
  };

  const contextValue: AppStateContextType = {
    loading,
    setLoading,
    user,
    setUser,
    signup: (data: Account) => handleFetch('signup', 'POST', data),
    login: (data: Login) => handleFetch('login', 'POST', data),
    checkLoggedIn: () => handleFetch('check_logged_in'),
    changeName: (data: ChangeName) => handleFetch('change_name', 'PATCH', data),
    changeEmail: (data: ChangeEmail) => handleFetch('change_email', 'PATCH', data),
    changePassword: (data: ChangePassword) => handleFetch('change_password', 'PATCH', data),
    logout: () => { handleFetch('logout', 'DELETE'); setUser(null) },
    deleteAccount: () => { handleFetch('delete_account', 'DELETE'); setUser(null) },
    error,
    setError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext)
