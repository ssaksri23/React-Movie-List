import axios from "axios";
import { BASE_URL } from "../constant/baseURL";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  params: {
    api_key: "c4c2f261766299bd7a173d106c6f7adb",
    language: "ko",
    sort_by: "popularity.desc",
    include_adult: "true",
  },
});
