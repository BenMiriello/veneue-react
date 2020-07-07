import Cookies from 'js-cookie';

import { UserType, SessionType } from './state';

export const setSessionCookie = (session: SessionType | null): boolean => {
  Cookies.remove('session');
  if (session) Cookies.set('session', session, { expires: 14 });
  if (getSessionCookie()) return true;
  return false;
};

export const getSessionCookie = (): SessionType | null => {
  const session = Cookies.get('session');
  if (session) return JSON.parse(session);
  return null;
}

export const removeSessionCookie = (): boolean => {
  Cookies.remove('session');
  if (!Cookies.get('session')) return true;
  return false;
};

export const sessionCookieJWT = (): string | null => {
  const session = getSessionCookie();
  if (session && session.jwt) return session.jwt;
  return null;
};

export const sessionCookieUser = (): UserType | null => {
  const session = getSessionCookie();
  if (session && session.user) return session.user;
  return null;
};
