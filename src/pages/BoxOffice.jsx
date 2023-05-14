import React, { useCallback, useEffect, useRef, useState } from "react";
import movieApi from "../api/movieAPI";
import MovieList from "../component/MovieList";
import NavBar from "../component/NavBar";

export default function BoxOffice() {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const target = useRef(null);

  const loadMore = useCallback(() => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  }, []);

  const getDailyMovie = useCallback(async () => {
    const res = await movieApi.getBoxOfficeList(pageNum);
    console.log("실행");
    setLoading(true);
    if (res.length > 0) {
      setMovieList((prev) => [...prev, ...res]);
    }
  }, [pageNum]);

  useEffect(() => {
    getDailyMovie();
  }, [getDailyMovie]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      observer.observe(target.current);
    }
  }, [loading, loadMore]);

  if (!movieList) return <p>로딩중입니다..</p>;
  return (
    <>
      <>
        <NavBar />
        <MovieList movieList={movieList} />
      </>
      <div ref={target} className="w-auto h-30"></div>
    </>
  );
}
