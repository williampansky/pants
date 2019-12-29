import exists from 'utils/element.exists';

const defaultValue = 'Not Selected';

export const setItem = (key, value) => {
  if (!exists(sessionStorage)) return;
  if (!exists(value)) return;
  if (value === defaultValue) return;

  return sessionStorage.setItem(key, value);
};

export const removeItem = key => {
  if (!exists(sessionStorage)) return;
  if (!exists(key)) return;

  return sessionStorage.removeItem(key);
};
