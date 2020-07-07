import { SessionType } from './state';

const apiRoot = 'localhost:3001';

interface SignupParams { email: string; name: string; password: string; };

export const signup = async (params: SignupParams): Promise<SessionType> => {
  const r = await fetch(`http://api.${apiRoot}/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    // credentials: 'include',
    body: JSON.stringify(params),
  });
  return await r.json();
};

interface LoginParams { email: string; password: string; };

export const login = async (params: LoginParams): Promise<SessionType> => {
  const r = await fetch(`http://api.${apiRoot}/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    // credentials: 'include',
    body: JSON.stringify(params),
  });
  return await r.json();
};
