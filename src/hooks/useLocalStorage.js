import * as React from 'react';

const PREFIX = 'pokedex-';

// Use local storage hook
export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  key = PREFIX + key;
  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
