const apiRoot = 'http://api.localhost:3001/v1';

export interface AccountData { email: string; name: string; password: string; };
export interface LoginData { email: string; password: string; };
export interface UpdatePasswordData { old_password: string; new_password: string; };

export const fetchSignup = ( data: AccountData ) => (
  fetch(apiRoot + '/registrations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user: data }),
  })
);

export const fetchLogin = ( data: LoginData ) => (
  fetch(apiRoot + '/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user: data }),
  })
);

export const fetchCheckLoggedIn = () => (
  fetch(apiRoot + '/logged_in', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
);

export const fetchEditAccount = ( data: AccountData ) => (
  fetch(apiRoot + '/edit_account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user: data }),
  })
);

export const fetchLogout = () => {
  fetch(apiRoot + '/logout', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
};

export const fetchDeleteAccount = () => {
  fetch(apiRoot + '/delete_account', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
};

export const fetchUpdatePassword = (data: UpdatePasswordData) => (
  fetch(apiRoot + '/update_password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({user: data})
  })
)
