import { SessionCookieType } from './state';

const apiRoot = 'localhost:3001';

interface SignupParams { email: string; name: string; password: string; };

export const signup = async ({ email, name, password }: SignupParams): Promise<SessionCookieType> => {
  const r = await fetch(`http://api.${apiRoot}/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        name,
        password,
      },
    }),
  });
  return await r.json();
};

interface LoginParams { email: string; password: string; };

export const login = async ({ email, password }: LoginParams): Promise<SessionCookieType> => {
  const r = await fetch(`http://api.${apiRoot}/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  });
  return await r.json();
};
