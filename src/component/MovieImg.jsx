import React from "react";
import AgeTag from "./AgeTag";

export default function MovieImg({ movieInfo, index }) {
  const { poster_path, adult } = movieInfo;
  return (
    <div className="relative overflow-hidden">
      <span className="absolute left-3 top-1 text-white text-2xl font-bold z-10">
        {index + 1}
      </span>
      <img
        className="w-50 h-70 object-cover rounded-md border-2 border-grey hover:scale-105 transition-all"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="영화 포스터"
        loading="lazy"
        decoding="async"
      />
      <AgeTag adult={adult} />
    </div>
  );
}
