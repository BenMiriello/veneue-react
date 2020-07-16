import { apiRoot } from '../constants';

export interface Login { email: string; password: string; };
export interface Account { email: string; name: string; password: string; };
export interface ChangeEmail { new_email: string; password: string; };
export interface ChangeName { new_name: string; password: string; };
export interface ChangePassword { old_password: string; new_password: string; };

export type FetchBody = Account | Login | ChangeEmail | ChangeName | ChangePassword;

export const fetchAPI = (endpoint?: string, method: string = 'GET', data?: FetchBody) => (
  fetch(apiRoot + endpoint, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...data && {body: JSON.stringify({ user: data })},
  })
);

const api = {
  signup: (data: Account) => fetchAPI('/users', 'POST', data),
  login: (data: Login) => fetchAPI('/sessions', 'POST', data),
  checkLoggedIn: () => fetchAPI('/logged_in', 'GET'),
  logout: () => fetchAPI('/logout', 'DELETE'),
  changeName: (data: ChangeName) => fetchAPI('/change_name', 'PATCH', data),
  changeEmail: (data: ChangeEmail) => fetchAPI('/change_email', 'PATCH', data),
  changePassword: (data: ChangePassword) => fetchAPI('/change_password', 'PATCH', data),
  deleteAccount: () => fetchAPI('/delete_account', 'DELETE'),
};

export default api;
