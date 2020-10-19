import ENV from '../../config/env';
import axios from 'axios';

console.log('API', ENV);

const api = axios.create({
  baseURL: ENV.URL_API,
});

api.interceptors.request.use(async (config) => {
  // const token = await getToken();
  // if (token && !config.headers.Authorization) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // logout();
      // userLogout();
    }
    return Promise.reject(error);
  },
);

export { api };
