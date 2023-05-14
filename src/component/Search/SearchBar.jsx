import React from "react";
import { useInput } from "../../hooks/useInput";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounceSuggestion } from "../../hooks/useDebounceSuggestion";
import SearchList from "./SearchList";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useKeyPress } from "../../hooks/useKeyPress";

export default function SearchBar() {
  const { value, onChange, setValue } = useInput("");
  const { suggestions } = useDebounceSuggestion(value);
  const { ref, isVisible, setIsVisible } = useClickOutside();
  const { focusIndex, setFocusIndex, onKeyDownHandler } = useKeyPress(
    suggestions,
    setValue
  );
  const handleSearch = (e) => {
    e.preventDefault();
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
        onSubmit={handleSearch}
        className="w-96 m-auto overflow-hidden "
      >
        <label htmlFor="search_movie" />
        <div className="relative h-10 w-96 rounded-lg">
          <input
            value={value}
            onChange={onChangeInput}
            onFocus={() => {
              setIsVisible(true);
              setFocusIndex(0);
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
        <SearchList
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          suggestions={suggestions}
          focusIndex={focusIndex}
          setFocusIndex={setFocusIndex}
        />
      </form>
    </>
  );
}
