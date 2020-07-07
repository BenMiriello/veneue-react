import Cookies from 'js-cookie';

import { UserType } from './state';

export const setSessionCookie = (user: UserType | null): void => {
  Cookies.remove('session');
  if (user) {
    Cookies.set('session', user, { expires: 14 });
  };
};

export const getSessionCookie = (): UserType | null => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie);
  return null;
};

export const getJWT = (): string | null => {
  const jwtCookie = Cookies.get('jwt');
  if (jwtCookie) return JSON.parse(jwtCookie);
  return null;
};