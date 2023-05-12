import React from "react";

export default function SearchList({ suggestions }) {
  return (
    suggestions.length > 0 && (
      <ul className="p-2 mt-2 border-2 border-grey z-30 absolute bg-white max-h-96 overflow-y-auto w-96 ">
        {suggestions &&
          suggestions.map((suggestion) => (
            <li key={suggestion.id} className="pb-2 hover:bg-grey1  ">
              <button
                type="submit"
                className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left "
              >
                {suggestion.title}
              </button>
            </li>
          ))}
      </ul>
    )
  );
}
