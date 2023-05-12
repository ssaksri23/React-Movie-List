import React from "react";
import MovieContent from "./MovieContent";
import MovieImg from "./MovieImg";
import { useNavigate } from "react-router-dom";

export default function MovieItem({ movieInfo, index, id }) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/details/${id}`, { state: { movieInfo } });
      }}
      className="flex flex-col px-5  hover:cursor-pointer
     "
    >
      <MovieImg movieInfo={movieInfo} index={index} />
      <MovieContent movieInfo={movieInfo} />
    </li>
  );
}
