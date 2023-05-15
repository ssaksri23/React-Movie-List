import { useState } from "react";

export const searchEnterKeyCode = {
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
};

export const searchLength = {
  INDEX_MAX: 8,
  LIST_MAX: 7,
};

export const useKeyPress = (recommendations, setValue) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const recommendLen = recommendations.length + 1;

  const onKeyDownHandler = (event) => {
    switch (event.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        console.log(recommendations[focusIndex - (1 % recommendLen)].title);
        setValue(recommendations[focusIndex - (1 % recommendLen)].title);
        setFocusIndex(0);

        break;
      case searchEnterKeyCode.ARROW_DOWN:
        console.log(focusIndex);
        setFocusIndex(focusIndex < recommendLen - 1 ? focusIndex + 1 : 1);
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
