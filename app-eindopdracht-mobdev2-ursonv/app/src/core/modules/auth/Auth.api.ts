import { API } from "../../network/api";
import { Auth, User } from "./Auth.types";

type LoginBody = {
  email: string;
  password: string;
};

type RegisterBody = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export const register = (body: RegisterBody) => {
  return API.post<Auth>("/register", body);
};

export const login = (body: LoginBody) => {
  return API.post<Auth>("/login", body);
};

export const getCurrentUser = () => {
  return API.get<User>("/users/current");
};
