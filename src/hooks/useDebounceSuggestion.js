import { useCallback, useState } from "react";
import movieApi from "../api/movieAPI";
import { useDebounce } from "./useDebounce";

export const useDebounceSuggestion = (keyword) => {
  const RECOMMENDATION_DELAY = 500;

  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    const suggestionList = await movieApi.searchMovie(keyword);
    if (!suggestions) {
      setSuggestions([]);
      return;
    }
    setSuggestions(suggestionList);
  }, [keyword]);

  useDebounce(fetchSuggestions, RECOMMENDATION_DELAY);

  return { suggestions };
};
