import Cookies from 'js-cookie';

import { UserType } from './state';

export const setSessionCookie = (session: UserType): void => {
  Cookies.remove('session');
  Cookies.set('session', session, { expires: 14 });
};

export const getSessionCookie = (): UserType | null => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie);
  return null;
};

export const sessionUser = (): UserType | null => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie).user;
  return null;
};

export const sessionJWT = (): string | null => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie).jwt;
  return null;
};
