import axios from 'axios';
import { clearToken, getToken } from './auth';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({ baseURL: API_URL });

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
