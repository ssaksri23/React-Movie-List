import React from "react";
import MovieItem from "./MovieItem";

// 영화 리스트 컴포넌트
export default function MovieList({ movieList }) {
  return (
    <ul
      className="grid grid-cols-[minmax(250px,_1fr)_minmax(250px,_1fr)_minmax(250px,_1fr)] lg:grid-cols-4
    "
    >
      {movieList &&
        movieList.map((movieInfo, index) => (
          <MovieItem
            key={movieInfo.id}
            index={index}
            movieInfo={movieInfo}
            id={movieInfo.id}
          />
        ))}
    </ul>
  );
}
