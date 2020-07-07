import Cookies from 'js-cookie';

import { UserType, UserSessionType } from './state';

export const setSessionCookie = (session: UserSessionType): void => {
  console.log('setSessionCookie');
  Cookies.remove('session');
  Cookies.set('session', session, { expires: 14 });
};

export const getSessionCookie = (): UserSessionType | null => {
  console.log('getSessionCookie');
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie);
  return null;
};

export const sessionUser = (): UserType | null => {
  console.log('sessionUser');
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie).user;
  return null;
};

export const sessionJWT = () => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie).jwt;
  return null;
};
