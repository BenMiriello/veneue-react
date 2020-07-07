import Cookies from 'js-cookie';

import { UserType } from './state';

export const setSession = (user: UserType | null): boolean => {
  Cookies.remove('session');
  if (user) Cookies.set('session', user, { expires: 14 });
  const session = getSession();
  if (session && session.name) {
    return true;
  } else {
    Cookies.remove('session');
    return false;
  };
};

export const getSession = (): UserType | null => {
  const session = Cookies.get('session');
  if (session) return JSON.parse(session);
  return null;
};

export const removeSession = (): boolean => {
  Cookies.remove('session');
  if (!Cookies.get('session')) return true;
  return false;
};

export const getJWT = (): string | null => {
  const jwtCookie = Cookies.get('jwt');
  if (jwtCookie) return JSON.parse(jwtCookie);
  return null;
};
