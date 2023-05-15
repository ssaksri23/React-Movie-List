import { useState } from "react";

export const searchEnterKeyCode = {
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
};

export const useKeyPress = (recommendations, handleClick) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const recommendLen = recommendations.length;

  const onKeyDownHandler = (event) => {
    switch (event.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        setFocusIndex(0);
        const searchItem = recommendations[focusIndex - 1];
        handleClick(searchItem); // handleClick 함수를 불러와 선택된 검색어로 페이지 이동
        break;

      case searchEnterKeyCode.ARROW_DOWN:
        setFocusIndex(focusIndex < recommendLen ? focusIndex + 1 : 1);
        break;

      case searchEnterKeyCode.ARROW_UP:
        setFocusIndex(focusIndex === 1 ? recommendLen - 1 : focusIndex - 1);
        break;

      default:
        break;
    }
  };

  return { focusIndex, setFocusIndex, onKeyDownHandler };
};
