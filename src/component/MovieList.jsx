import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ movieList }) {
  return (
    <ul className="grid grid-cols-3">
      {movieList.length === 0 && <p>리스트가 존재하지 않습니다.</p>}
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
