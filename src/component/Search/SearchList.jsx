import React from "react";
import { useNavigate } from "react-router-dom";
// fix :Enter 시 input 값 셋팅이 아닌, 디테일 페이지 이동하기
export default function SearchList({
  suggestions = [],
  setIsVisible,
  isVisible,
  focusIndex,
  setFocusIndex,
  onClick,
}) {
  // const navigate = useNavigate();

  // const handleClick = (e, suggestion) => {
  //   e.preventDefault();
  //   setIsVisible(false); // SearchList 닫기
  //   navigate(`/details/${suggestion.id}`, {
  //     state: { movieInfo: suggestion },
  //   });
  // };

  return (
    <ul
      className={`${
        isVisible ? "block" : "hidden"
      } p-2 mt-2 border-2 border-grey z-30 absolute bg-white overflow-hidden max-h-96 overflow-y-auto w-80}`}
    >
      {suggestions.length === 0 && <div className="w-80">검색어 없음</div>}
      {suggestions.length > 0 &&
        suggestions.map((suggestion, index) => (
          <li
            key={suggestion.id}
            className={`${index + 1 === focusIndex ? "bg-grey1" : ""} w-80`}
            // onClick={(e) => handleClick(e, suggestion)}
            onSubmit={(e) => {
              onClick();
            }}
          >
            <button
              onMouseOver={() => setFocusIndex(index + 1)}
              type="submit"
              className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left"
            >
              {suggestion.title}
            </button>
          </li>
        ))}
    </ul>
  );
}
