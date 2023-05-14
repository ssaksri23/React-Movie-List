import { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";

// 박스오피스 영화 조회 함수
const getBoxOfficeList = async () => {
  try {
    const response = await axiosInstance.get("/discover/movie");
    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

// 키워드로 영화 검색하는 함수
const searchMovie = async (keyword) => {
  try {
    const response = await axiosInstance.get("/search/movie", {
      params: { query: keyword },
    });
    const data = await response.data.results;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// 현재 상영중인 영화 조회 함수
const getNowPlayingMovieList = async () => {
  try {
    const response = await axiosInstance.get("/movie/now_playing");
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
