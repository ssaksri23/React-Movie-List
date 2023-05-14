import React, { useEffect, useState } from "react";
import movieApi from "../api/movieAPI";
import MovieList from "../component/MovieList";
import NavBar from "../component/NavBar";

export default function BoxOffice() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getDailyMovie = async () => {
    const res = await movieApi.getBoxOfficeList();
    console.log(res);

    setLoading(true);
    if (res.length > 0) {
      setLoading(false);
      setMovieList(res);
    }
  };

  useEffect(() => {
    getDailyMovie();
  }, []);

  return (
    <>
      {loading ? (
        <p>로딩중입니다..</p>
      ) : (
        <>
          <NavBar />
          <MovieList movieList={movieList} />
        </>
      )}
    </>
  );
}
