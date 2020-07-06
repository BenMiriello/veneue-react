import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserType {
  name: string;
  email: string;
}

export interface AppStateContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
}

export const AppStateContext = createContext<AppStateContextType>(null!);

export default function AppStateProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contextValue: AppStateContextType = { user, setUser, isLoading, setIsLoading };
  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
}

export const useAppState = () => useContext(AppStateContext);