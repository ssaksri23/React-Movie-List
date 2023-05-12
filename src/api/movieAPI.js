import { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";

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

const searchMovie = async (keyword) => {
  try {
    const response = await axiosInstance.get("/search/movie", {
      params: { query: keyword },
    });
    const data = await response.data.results;
    console.info("calling api");

    return data;
  } catch (error) {
    console.error(error);
  }
};

const movieApi = {
  getBoxOfficeList,
  searchMovie,
};

export default movieApi;
