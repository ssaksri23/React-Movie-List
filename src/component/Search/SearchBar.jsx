import React from "react";
import { useInput } from "../../hooks/useInput";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounceSuggestion } from "../../hooks/useDebounceSuggestion";
import SearchList from "./SearchList";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useKeyPress } from "../../hooks/useKeypress";

export default function SearchBar() {
  const { value, onChange, setValue } = useInput("");
  const { suggestions } = useDebounceSuggestion(value);
  const { ref, isVisible, setIsVisible } = useClickOutside();
  const { focusIndex, setFocusIndex, onKeyDownHandler } = useKeyPress(
    suggestions,
    setValue
  );

  const handleSearch = (e) => {
    setIsVisible(false);
  };

  const onChangeInput = (e) => {
    onChange(e);
    setIsVisible(true);
  };

  return (
    <>
      <form
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="w-96 m-auto overflow-hidden"
      >
        <label htmlFor="search_movie" />
        <div className="relative h-10">
          <input
            value={value}
            onChange={onChangeInput}
            onFocus={() => {
              setIsVisible(true);
            }}
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
            setIsVisible={setIsVisible}
            suggestions={suggestions}
            value={value}
            isVisible={isVisible}
            focusIndex={focusIndex}
            setFocusIndex={setFocusIndex}
            onClick={handleSearch}
          />
        </div>
      </form>
    </>
  );
}
