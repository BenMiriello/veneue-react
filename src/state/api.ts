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

export const signup = (data: Account) => fetchAPI('/users', 'POST', data);
export const login = (data: Login) => fetchAPI('/sessions', 'POST', data);
export const checkLoggedIn = () => fetchAPI('/logged_in', 'GET');
export const logout = () => fetchAPI('/logout', 'DELETE');
export const changeName = (data: ChangeName) => fetchAPI('/change_name', 'PATCH', data);
export const changeEmail = (data: ChangeEmail) => fetchAPI('/change_email', 'PATCH', data);
export const changePassword = (data: ChangePassword) => fetchAPI('/change_password', 'PATCH', data);
export const deleteAccount = () => fetchAPI('/delete_account', 'DELETE');
