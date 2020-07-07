import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

import { getSessionCookie, setSessionCookie } from './session';

export interface UserType {
  name: string;
  email: string;
};

export interface AppStateContextType {
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
  user: UserType | null;
  setUser: (u: UserType | null) => void;
  logout: () => void;
  error: Error | null;
  handleSetError: (e: Error | null) => void;
}

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, _setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleSetError = (error: Error | null) => {
    console.log(error);
    setError(error);
  }

  const setUser = (user: UserType | null) => {
    setSessionCookie(user);
    _setUser(user);
  };

  const logout = () => { setSessionCookie(null) };

  useEffect(() => {
    if (!user) {
      const sessionCookie = getSessionCookie();
      if (sessionCookie) {
        setUser(sessionCookie);
      }
    }
  }, [user]);

  const contextValue: AppStateContextType = {
    isLoading,
    setIsLoading,
    user,
    setUser,
    logout,
    error,
    handleSetError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
}

export const useAppState = () => useContext(AppStateContext);
