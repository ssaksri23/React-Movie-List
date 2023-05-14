import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import movieApi from "../api/movieAPI";
import MovieList from "../component/MovieList";

export default function NowPlayingMovie() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getNowPlayingrMovie = async () => {
    const res = await movieApi.getNowPlayingMovieList();
    console.log(res);
    setLoading(true);
    if (res.length > 0) {
      setLoading(false);
      setMovieList(res);
    }
  };

  useEffect(() => {
    getNowPlayingrMovie();
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
