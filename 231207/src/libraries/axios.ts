import Axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '@/configurations';

const axiosRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accpet = 'application/json';
  }
  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(axiosRequestInterceptor);
