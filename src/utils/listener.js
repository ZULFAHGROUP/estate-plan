import store from '../store';
import { setToken } from './storage';

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;

  if (currentAuth !== previousAuth) {
    setToken(currentAuth?.token);
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
