import axios from 'axios';

import { refetchToken } from '../helper/refetch';
import { SESSION } from '../helper/globalHelper';
import { getSessionStorage, unsetSessionStorage } from '../helper/sessionConfiguration';

const API = axios.create({
  baseURL: 'https://localhost:3000',
});
let isRefreshing = false;
const TOKEN_PAYLOAD_KEY = 'authorization';

const TOKEN = () => getSessionStorage(SESSION.PROJECT_NAME_TOKEN);

API.interceptors.request.use(function (config) {
  if (TOKEN()) {
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${TOKEN()}`;
  }
  return config;
});

API.interceptors.response.use(
  // unwrap response data
  ({ data }) => data,

  // catch statusCode != 200 responses and format error
  (error) => {
    if (error.response) {
      const errorData = {
        ...error.response.data,
        status: error.response.status,
      };
      if (error.response.status === 401) {
        unsetSessionStorage();
      }
      if (error.response.status === 403) {
        if (!isRefreshing) {
          isRefreshing = true;
          refetchToken();
        }
      }
      return Promise.reject(errorData);
    }
    return Promise.reject({ message: error.message });
  }
);

export default API;
