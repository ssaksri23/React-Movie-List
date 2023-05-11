import React from "react";
import AgeTag from "./AgeTag";

export default function MovieImg({ movieInfo, index }) {
  const { poster_path, adult } = movieInfo;
  return (
    <div className="relative">
      <span className="absolute left-3 top-1 text-white text-2xl font-bold">
        {index}
      </span>
      <img
        className="w-full h-full object-cover rounded-md border-2 border-grey"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
      />
      <AgeTag adult={adult} />
    </div>
  );
}
