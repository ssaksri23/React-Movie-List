import { useState } from "react";

export const searchEnterKeyCode = {
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
};

//recommendations 배열과 handleClick 함수를 입력값으로 받아 키보드로 추천 검색 이동이 가능한 커스텀 훅
export const useKeyPress = (recommendations, handleClick) => {
  // 현재 포커스가 있는 추천 검색어의 인덱스를 가리킵니다.
  const [focusIndex, setFocusIndex] = useState(0);
  const recommendLen = recommendations ? recommendations.length : 0;

  const onKeyDownHandler = (event) => {
    switch (event.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        const searchItem = recommendations[focusIndex - 1];
        // handleClick 함수를 불러와 선택된 검색어로 페이지 이동
        handleClick(searchItem);
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
