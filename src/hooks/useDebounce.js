import { useEffect, useState } from "react";

// 함수를 지연시키는 디바운스 커스텀 훅 생성
export const useDebounce = (callback, delay) => {
  const [debouncedCallback, setDebouncedCallback] = useState(() => callback);

  useEffect(() => {
    setDebouncedCallback(() => callback);
  }, [callback]);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      debouncedCallback();
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [debouncedCallback, delay]);

  return debouncedCallback;
};
