import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

import { setSessionCookie, getSessionCookie, removeSessionCookie } from './session';

export interface UserType {
  name: string;
  email: string;
};

export interface SessionType {
  jwt: string;
  user: UserType;
}

export interface AppStateContextType {
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
  user: UserType | null;
  setSession: (u: SessionType | null) => void;
  logout: () => void;
  error: Error | null;
  handleSetError: (e: Error | null) => void;
}

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [session, _setSession] = useState<SessionType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const setSession = (res: SessionType | null) => {
    if (setSessionCookie(res)) _setSession(res);
  };

  const logout = () => {
    if (removeSessionCookie()) _setSession(null);
    else handleSetError(new Error('Unable to log out. Please try again.'))
  };

  useEffect(() => {
    if (!session) {
      const sessionCookie = getSessionCookie();
      if (sessionCookie) setSession(sessionCookie);
    }
  }, [session]);

  const handleSetError = (error: Error | null) => {
    console.log(error);
    setError(error);
  }

  const contextValue: AppStateContextType = {
    isLoading,
    setIsLoading,
    user: session?.user || null,
    setSession,
    logout,
    error,
    handleSetError,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
}

export const useAppState = () => useContext(AppStateContext);
