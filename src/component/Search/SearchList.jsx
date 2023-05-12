import React from "react";

export default function SearchList({ suggestions }) {
  return (
    suggestions.length > 0 && (
      <ul className="p-2 border-2 border-grey z-10 absolute bg-white max-h-96 overflow-y-auto">
        {suggestions &&
          suggestions.map((suggestion) => (
            <li key={suggestion.id} className="text-start pb-2">
              <button type="submit" className="">
                {suggestion.title}
              </button>
            </li>
          ))}
      </ul>
    )
  );
}
