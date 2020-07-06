import { UserType } from './state';

const apiRoot = 'localhost:3001';

export const signup = (email: string, name: string, password: string): Promise<{ jwt: string; user: UserType }> => {
  return fetch(`http://api.${apiRoot}/v1/users`, {
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
  })
    .then(r => r.json())
    .catch((err) => console.log(err));
};

export const login = (email: string, password: string): Promise<{ jwt: string; user: UserType }> => {
  return fetch(`http://api.${apiRoot}/v1/login`, {
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
  })
    .then(r => r.json())
    .catch((err) => console.log(err));
};
