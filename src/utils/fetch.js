import axios from 'axios';
import { createBrowserHistory } from 'history';
import { clearStorages, getToken } from './storage';

export const history = createBrowserHistory();

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

instance.interceptors.request.use(function (config) {
  const token = getToken();
  if (getToken()) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const defaultError = {
  code: 500,
  status: 'error',
  message: 'Failed to fetch data. Please contact developer.'
};

instance.interceptors.response.use(
  function (response) {
    return {body: response.data, headers: response.headers};
  },
  function (err) {
    if (axios.isCancel(err)) {
      return Promise.reject('request canceled');
    }

    if (err.response && err.response.data) {
      if (err.response.status === 401) {
        clearStorages();
        history.push('/login');
      }
      return Promise.reject(err.response.data);
    } else {
      return Promise.reject(defaultError);
    }
  }
);

export default instance;
