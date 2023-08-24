const TOKEN_STORAGE = 'token';

export function setToken(value) {
  return Promise.resolve().then(function () {
    localStorage.setItem(TOKEN_STORAGE, JSON.stringify(value));
  });
}

export function getToken() {
  return localStorage.getItem(TOKEN_STORAGE);
}

export function clearStorages() {
  localStorage.removeItem(TOKEN_STORAGE);
  return Promise.resolve().then(function () {
    localStorage.removeItem(TOKEN_STORAGE);
  });
}
