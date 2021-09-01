export const getPLAINFromLocalStorage = (key) => localStorage.getItem(key);

export const getJSONFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (localStorage && value) {
    return JSON.parse(value);
  }
  return [];
};

export const setJSONInLocalStorage = (key, value) => {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
