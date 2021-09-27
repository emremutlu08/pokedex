import * as React from 'react';

const PREFIX = 'pokedex-';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  // const [promise, setPromise] = React.useState(false);
  key = PREFIX + key;
  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
      // setPromise(true);
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // React.useEffect(() => {
  //   if (promise === false) setValue('loading...');
  // }, [promise]);

  return [value, setValue];
}
