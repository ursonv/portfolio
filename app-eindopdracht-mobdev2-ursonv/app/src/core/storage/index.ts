import { User } from '../modules/auth/Auth.types';


const AUTH_TOKEN_KEY = "token";
const USER_KEY = "user";

const getAuthToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

const saveAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
};

const getUser = (): User | null => {
  const userJson = localStorage.getItem(USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

const saveUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
};

export { getAuthToken, saveAuthToken, getUser, saveUser };
