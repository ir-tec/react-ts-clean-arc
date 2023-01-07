import axios, { AxiosRequestConfig } from "axios";

export const http_instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

http_instance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers
    ? (config.headers.Authorization = `Bearer ${localStorage.token}`)
    : (config.headers = { Authorization: `Bearer ${localStorage.token}` });

  return config;
});
