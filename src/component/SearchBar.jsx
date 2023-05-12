import React from "react";
import { useInput } from "../hooks/useInput";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounceSuggestion } from "../hooks/useDebounceSuggestion";
import SearchList from "./Search/SearchList";

export default function SearchBar() {
  const { value, onChange, setValue } = useInput("");
  const { suggestions } = useDebounceSuggestion(value);

  return (
    <>
      <form className="w-96 m-auto mb-10 overflow-hidden ">
        <label htmlFor="search_movie" />
        <div className="relative h-10 w-96 rounded-lg">
          <input
            value={value}
            onChange={onChange}
            id="search_movie"
            type="text"
            placeholder="작품, 배우, 감독명을 입력하세요"
            className="w-full p-2 "
          />
          <button className="absolute right-1 p-3">
            <AiOutlineSearch className="w-5 h-5" />
          </button>
        </div>
        <SearchList suggestions={suggestions} />
      </form>
    </>
  );
}
