import React from "react";
import { useInput } from "../../hooks/useInput";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounceSuggestion } from "../../hooks/useDebounceSuggestion";
import SearchList from "./SearchList";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useKeyPress } from "../../hooks/useKeypress";
import { useNavigate } from "react-router-dom";

// fix: 돋보기 버튼을 통해 검색하기
export default function SearchBar() {
  const { value, onChange } = useInput("");
  const { suggestions } = useDebounceSuggestion(value);
  const { ref, isVisible, setIsVisible } = useClickOutside();
  const { focusIndex, setFocusIndex, onKeyDownHandler } = useKeyPress(
    suggestions,
    handleDetailPage
  );

  const navigate = useNavigate();
  function handleDetailPage(suggestion) {
    navigate(`/details/${suggestion.id}`, {
      state: { movieInfo: suggestion },
    });
  }

  const onChangeInput = (e) => {
    onChange(e);
    setIsVisible(true);
  };

  return (
    <>
      <form ref={ref} className="w-96 m-auto overflow-hidden">
        <label htmlFor="search_movie" />
        <div className="relative h-10">
          <input
            value={value}
            onChange={onChangeInput}
            onKeyDown={onKeyDownHandler}
            id="search_movie"
            type="text"
            placeholder="작품, 배우, 감독명을 입력하세요"
            className="w-full p-2 "
          />
          <button type="submit" className="absolute right-1 p-3">
            <AiOutlineSearch className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center ">
          <SearchList
            suggestions={suggestions}
            isVisible={isVisible}
            focusIndex={focusIndex}
            setFocusIndex={setFocusIndex}
            handleDetailPage={handleDetailPage}
          />
        </div>
      </form>
    </>
  );
}
