import axios, { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";

// 박스오피스 영화 조회 함수

const getBoxOfficeList = async (pageNum) => {
  try {
    const response = await axios.get("/.netlify/functions/movie", {
      params: {
        language: "ko",
        sort_by: "popularity.desc",
        include_adult: "true",
        page: pageNum,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

// 키워드로 영화 검색하는 함수
const searchMovie = async (keyword) => {
  try {
    const response = await axios.get("/.netlify/functions/search", {
      params: {
        language: "ko",
        sort_by: "popularity.desc",
        include_adult: "true",
        query: keyword,
      },
    });
    const data = await response.data.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// 현재 상영중인 영화 조회 함수
const getNowPlayingMovieList = async (pageNum) => {
  try {
    const response = await axiosInstance.get("/movie/now_playing", {
      params: { page: pageNum },
    });
    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

const movieApi = {
  getBoxOfficeList,
  searchMovie,
  getNowPlayingMovieList,
};

export default movieApi;
