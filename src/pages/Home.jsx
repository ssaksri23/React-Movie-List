import React, { useEffect, useState } from "react";
import movieApi from "../api/movieAPI";
import MovieList from "../component/MovieList";
import SearchBar from "../component/SearchBar";
import Headers from "../component/Headers";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getDailyMovie = async () => {
    const res = await movieApi.getBoxOfficeList();
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
          <Headers>예매 순위</Headers>
          <SearchBar />
          <MovieList movieList={movieList} />
        </>
      )}
    </>
  );
}
