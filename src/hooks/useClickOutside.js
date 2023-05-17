import { useEffect, useRef, useState } from "react";

// 지정된 요소의 외부 클릭을 감지하는 커스텀 훅.
export const useClickOutside = (initialState) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { ref, isVisible, setIsVisible };
};
