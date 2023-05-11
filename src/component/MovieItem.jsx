import React from "react";
import MovieContent from "./MovieContent";
import MovieImg from "./MovieImg";

export default function MovieItem({ movieInfo, index }) {
  //   console.log(movieInfo);

  return (
    <li className="flex flex-col px-5 w-full">
      <MovieImg movieInfo={movieInfo} index={index} />
      <MovieContent movieInfo={movieInfo} />
    </li>
  );
}
