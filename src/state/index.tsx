import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import useApi, { Account, Login, ChangeEmail, ChangeName, ChangePassword, FetchBody } from './api';

export interface UserType { name: string; email: string; };

export interface AppStateContextType {
  loading: boolean;
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
  const [loading, api] = useApi();
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const contextValue: AppStateContextType = {
    loading,
    user,
    setUser,
    signup: (data: Account) => api('/users', 'POST', data),
    login: (data: Login) => api('/sessions', 'POST', data),
    checkLoggedIn: () => api('/logged_in', 'GET'),
    changeName: (data: ChangeName) => api('/change_name', 'PATCH', data),
    changeEmail: (data: ChangeEmail) => api('/change_email', 'PATCH', data),
    changePassword: (data: ChangePassword) => api('/change_password', 'PATCH', data),
    logout: () => { () => api('/logout', 'DELETE'); setUser(null) },
    deleteAccount: () => { () => api('/delete_account', 'DELETE'); setUser(null) },
    error,
    setError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext)


// import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// import { Account, Login, ChangeEmail, ChangeName, ChangePassword, toApi, FetchBody } from './api';

// export interface UserType { name: string; email: string; };

// export interface AppStateContextType {
//   loading: boolean;
//   setLoading: Dispatch<SetStateAction<boolean>>;
//   user: UserType | null;
//   setUser: Dispatch<SetStateAction<UserType | null>>;
//   signup: (data: Account) => void;
//   login: (data: Login) => void;
//   checkLoggedIn: () => void;
//   logout: () => void;
//   changeEmail: (data: ChangeEmail) => void;
//   changeName: (data: ChangeName) => void;
//   changePassword: (data: ChangePassword) => void;
//   deleteAccount: () => void;
//   error: Error | null;
//   setError: Dispatch<SetStateAction<Error | null>>;
// };

// export const AppStateContext = createContext<AppStateContextType>(null!);

// export default function AppStateProvider(props: { children: ReactNode }) {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [user, setUser] = useState<UserType | null>(null);
//   const [error, setError] = useState<Error | null>(null);

//   const handleFetch = async (endpoint: string, method: string, data?: FetchBody) => {
//     setLoading(true);
//     toApi(endpoint, method, data)
//       .then(r => r.json())
//       .then(r => {
//         console.log(r);
//         setUser(r.user || null);
//         r.errors && setError(r.errors);
//       })
//       .catch(setError);
//     setLoading(false);
//   };

//   const contextValue: AppStateContextType = {
//     loading,
//     setLoading,
//     user,
//     setUser,
//     signup: (data: Account) => handleFetch('/users', 'POST', data),
//     login: (data: Login) => handleFetch('/sessions', 'POST', data),
//     checkLoggedIn: () => handleFetch('/logged_in', 'GET'),
//     changeName: (data: ChangeName) => handleFetch('/change_name', 'PATCH', data),
//     changeEmail: (data: ChangeEmail) => handleFetch('/change_email', 'PATCH', data),
//     changePassword: (data: ChangePassword) => handleFetch('/change_password', 'PATCH', data),
//     logout: () => { () => toApi('/logout', 'DELETE'); setUser(null) },
//     deleteAccount: () => { () => toApi('/delete_account', 'DELETE'); setUser(null) },
//     error,
//     setError,
//   };

//   return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
// };

// export const useAppState = () => useContext(AppStateContext)
