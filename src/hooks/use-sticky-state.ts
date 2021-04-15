import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useStickyState = <T>(defaultValue: T, key: string) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
};

export default useStickyState;
