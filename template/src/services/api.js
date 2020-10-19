import { baseURL } from '../../config/env';
import axios from 'axios';
import { clearToken, getToken } from './auth';

const api = axios.create({ baseURL });

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      await clearToken();
    }
    return Promise.reject(error);
  },
);

export { api };
