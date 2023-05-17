import { useState } from "react";

// 입력 요소의 상태와 onChange 이벤트를 관리하는 커스텀 훅
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { value } = event.target;

    setValue(value);
  };

  return { value, onChange };
};
