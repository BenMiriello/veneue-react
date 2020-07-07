// import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { UserType } from './state';

export const setSessionCookie = (user: UserType | null): void => {
  Cookies.remove('session');
  if (user) {
    Cookies.set('session', user, { expires: 14 });
  };
};

export const getSessionCookie = (): UserType | null => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie) return JSON.parse(sessionCookie);
  return null;
};

// export default function useUser() {
//   const [session, setSession] = useState<UserType | null>(null);
  
//   useEffect(() => {
//     const sessionCookie = getSessionCookie();
//     if (!user && sessionCookie) {
//       setSession(getSessionCookie());
//     }
//   }, []);

//   const user = session;

//   const setUser = (user: UserType | null) => {
//     setSessionCookie(user);
//     setSession(user);
//   };

//   return [user, setUser];
// };
