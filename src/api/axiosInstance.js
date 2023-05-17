import axios from "axios";
import { BASE_URL } from "../constant/baseURL";

// axios.create()를 통한 기본 설정이 적용된 인스턴스를 생성
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
