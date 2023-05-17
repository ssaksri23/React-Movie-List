import React, { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "../component/NavBar";
import movieApi from "../api/movieAPI";
import MovieList from "../component/MovieCardList/MovieList";

export default function NowPlayingMovie() {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const target = useRef(null);

  const getNowPlayingrMovie = useCallback(async () => {
    const res = await movieApi.getNowPlayingMovieList(pageNum);
    setLoading(true);
    if (Array.isArray(res) && res.length > 0) {
      setMovieList((prev) => [...prev, ...res]);
    }
  }, [pageNum]);

  useEffect(() => {
    getNowPlayingrMovie();
  }, [getNowPlayingrMovie]);

  const loadMore = useCallback(() => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  }, []);

  // 무한 스크롤을 위해 intersectionObserver API로 타겟 요소를 추적
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          // 타켓 요소에 교차되었을 때 loadMore 함수 실행
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      observer.observe(target.current);
    }
  }, [loading, loadMore]);

  // movieList가 비어있을 때 '로딩중입니다' 렌더링
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
