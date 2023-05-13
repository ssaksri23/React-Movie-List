import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchList({ suggestions }) {
  const navigate = useNavigate();
  console.log(suggestions.id);

  const handleClick = (e, suggestion) => {
    e.preventDefault();
    navigate(`/details/${suggestion.id}`, {
      state: { movieInfo: suggestion },
    });
  };

  return (
    suggestions.length > 0 && (
      <ul className="p-2 mt-2 border-2 border-grey z-30 absolute bg-white max-h-96 overflow-y-auto w-96 ">
        {suggestions &&
          suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="pb-2 hover:bg-grey1"
              onClick={(e) => handleClick(e, suggestion)}
            >
              <button className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left ">
                {suggestion.title}
              </button>
            </li>
          ))}
      </ul>
    )
  );
}
