import axios from "axios";
import { getAuthToken } from '../storage';


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

API.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { API };
