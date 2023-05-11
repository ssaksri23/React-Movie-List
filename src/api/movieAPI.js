import { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";
import { BASE_URL } from "../constant/baseURL";

const getBoxOfficeList = async () => {
  try {
    const response = await axiosInstance.get(BASE_URL);
    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

const movieApi = {
  getBoxOfficeList,
};

export default movieApi;
