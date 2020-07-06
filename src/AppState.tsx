import React, { createContext, ReactNode, useState } from 'react';

export interface IUser {
  name: string;
  email: string;
}

export interface IAppContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
}

export const AppContext = createContext<IAppContext>(null!);

export default function AppState(props: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const contextValue: IAppContext = { user, setUser, isLoading, setIsLoading };
  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
}
