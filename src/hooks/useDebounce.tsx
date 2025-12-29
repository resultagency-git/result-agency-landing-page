import { useRef, useEffect } from "react";

const useDebounce = () => {
  const timeout = useRef<any>(0);

  useEffect(() => {
    return () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    };
  }, []);

  const debounce = (func: () => void, wait: number | undefined) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => func(), wait);
  };

  return { debounce };
};

export default useDebounce;
