import { useEffect } from 'react';

const getJSONFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (localStorage && value) {
    return JSON.parse(value);
  }
  return [];
};

const saveInLocalStorage = (key, value) => {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const useLocalStorage = (state, setState, keyInLS, ...dependencies) => {
  useEffect(() => {
    const stateInLS = getJSONFromLocalStorage(keyInLS);
    if (stateInLS !== undefined || stateInLS.length > 0) setState(stateInLS);
  }, []);

  useEffect(() => {
    saveInLocalStorage(keyInLS, state);
  }, [state, ...dependencies]);
};
