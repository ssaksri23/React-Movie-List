import React, { useEffect, useState } from "react";
import movieApi from "../api/movieAPI";
import MovieList from "../component/MovieList";

export default function BoxOffice() {
  const [movieList, setMovieList] = useState([]);

  const getDailyMovie = async () => {
    const res = await movieApi.getBoxOfficeList(
      "199ff03db6855d0ed5343e92968fef7e",
      20230101
    );
    setMovieList(res);
  };

  useEffect(() => {
    getDailyMovie();
  }, []);

  return (
    <>
      <h1 className="text-center p-8">박스 오피스</h1>
      <MovieList movieList={movieList} />
    </>
  );
}
