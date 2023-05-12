import React from "react";
import { useInput } from "../hooks/useInput";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounceSuggestion } from "../hooks/useDebounceSuggestion";

export default function SearchInput() {
  const { value, onChange, setValue } = useInput("");
  const { suggestions } = useDebounceSuggestion(value);

  console.log(suggestions);

  return (
    <div>
      <form className="w-96 m-auto overflow-hidden">
        <fieldset className="">
          <legend className="sr-only">
            작품, 배우, 감독명을 입력하여 영화를 검색하세요.
          </legend>
          <label htmlFor="search_movie" />
          <div className="relative h-10 w-96 rounded-lg ">
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
        </fieldset>
      </form>
    </div>
  );
}
