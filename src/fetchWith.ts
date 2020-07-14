const apiRoot = 'http://api.localhost:3001/v1';

export interface Login { email: string; password: string; };
export interface Account { email: string; name: string; password: string; };
export interface ChangeEmail { new_email: string; password: string; };
export interface ChangeName { new_name: string; password: string; };
export interface ChangePassword { old_password: string; new_password: string; };

export type Body = Account | Login | ChangeEmail | ChangeName | ChangePassword;

export const fetchWith = (endpoint?: string, method: string = 'GET', data?: Body) => (
  fetch(apiRoot + endpoint, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...data && {body: JSON.stringify({ user: data })},
  })
)