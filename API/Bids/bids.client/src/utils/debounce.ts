import { useEffect, useRef } from 'react';

// Custom debounce function
const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      // cleanup function to clear the timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (...args: any[]) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export { useDebounce };
