import React from "react";

// 추천 검색 리스트 컴포넌트
export default function SearchList({
  suggestions = [],
  isVisible,
  focusIndex,
  setFocusIndex,
  handleDetailPage,
}) {
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
          >
            <button
              onMouseOver={() => setFocusIndex(index + 1)}
              onClick={() => {
                handleDetailPage(suggestion);
              }}
              type="button"
              className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left"
            >
              {suggestion.title}
            </button>
          </li>
        ))}
    </ul>
  );
}
