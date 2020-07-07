import React, { createContext, useContext, useState, ReactNode } from 'react';

import { getSessionCookie, setSessionCookie, sessionUser, sessionJWT } from './sessions';

export interface UserType {
  name: string;
  email: string;
}

export interface UserSessionType {
  jwt: string;
  user: UserType;
}

export interface AppStateContextType {
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
  setSessionCookie: (session: UserSessionType) => void;
  getSessionCookie: () => UserSessionType | null;
  user: UserType | null;
  sessionToken: string | null;
}

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contextValue: AppStateContextType = {
    isLoading,
    setIsLoading,
    getSessionCookie,
    setSessionCookie,
    user: sessionUser(),
    sessionToken: sessionJWT(),
  };
  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
}

export const useAppState = () => useContext(AppStateContext);
