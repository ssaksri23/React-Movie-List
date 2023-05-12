import axios from "axios";
import { BASE_URL } from "../constant/baseURL";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko",
    sort_by: "popularity.desc",
    include_adult: "true",
  },
});
