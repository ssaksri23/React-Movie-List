import React from "react";
import MovieContent from "./MovieContent";
import MovieImg from "./MovieImg";
import { useNavigate } from "react-router-dom";

export default function MovieItem({ movieInfo, index, id }) {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col px-5 w-full hover:cursor-pointer"
      onClick={() => {
        navigate(`/details/${id}`, { state: { movieInfo } });
      }}
    >
      <MovieImg movieInfo={movieInfo} index={index} />
      <MovieContent movieInfo={movieInfo} />
    </li>
  );
}
