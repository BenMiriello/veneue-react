import { ChangeEvent } from 'react';
import { History } from 'history';

export const handleRedirect = (history: History, newLocation: string) => {
  history.push(newLocation);
};

export const handleChange = (set: (s: string) => void, e: ChangeEvent<HTMLInputElement>) => {
  set(e.target.value);
};

const Handle = {
  redirect: handleRedirect,
  change: handleChange
};

export default Handle;