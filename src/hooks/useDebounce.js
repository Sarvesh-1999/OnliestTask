import { useEffect, useState } from "react";

export const useDebounce = (query, delay = 500) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(timer);
  }, [query]);

  return debouncedQuery;
};
