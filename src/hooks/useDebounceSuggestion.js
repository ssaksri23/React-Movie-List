import { useCallback, useState } from "react";
import movieApi from "../api/movieAPI";
import { useDebounce } from "./useDebounce";

// 입력 키워드를 디바운스 처리하고, 해당 키워드를 사용하여 영화 추천 리스트를 가져오는 커스텀 훅
export const useDebounceSuggestion = (keyword) => {
  const RECOMMENDATION_DELAY = 500;

  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    const res = await movieApi.searchMovie(keyword);
    if (!suggestions) {
      setSuggestions([]);
      return;
    }
    setSuggestions(res);
  }, [keyword, suggestions]);

  useDebounce(fetchSuggestions, RECOMMENDATION_DELAY);

  return { suggestions };
};
