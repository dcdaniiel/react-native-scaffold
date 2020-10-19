import {
  getItem,
  setItem,
  removeItem,
} from '@react-native-community/async-storage';

const TOKEN = 'TOKEN';

export const storeToken = async (token) => setItem(TOKEN, token);
export const getToken = async () => getItem(TOKEN);
export const clearToken = async () => removeItem(TOKEN);
