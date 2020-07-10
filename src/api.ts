const apiRoot = 'localhost:3001';

export interface AccountData { email: string; name: string; password: string; };
export interface LoginData { email: string; password: string; };
export interface UpdatePasswordData { old_password: string; new_password: string; };

export const fetchSignup = ( data: AccountData ) => (
  fetch(`http://www.${apiRoot}/registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user: data }),
  })
);

export const fetchLogin = ( data: LoginData ) => (
  fetch(`http://${apiRoot}/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user: data }),
  })
);

export const fetchCheckLoggedIn = () => (
  fetch(`http://${apiRoot}/logged_in`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
);

export const fetchEditAccount = ( data: AccountData ) => (
  fetch(`http://${apiRoot}/edit_account`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user: data }),
  })
);

export const fetchLogout = () => {
  fetch(`http://${apiRoot}/logout`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
};

export const fetchDeleteAccount = () => {
  fetch(`http://${apiRoot}/delete_account`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
}

export const fetchUpdatePassword = (data: UpdatePasswordData) => (
  fetch(`http://${apiRoot}/update_password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({user: data})
  })
);
