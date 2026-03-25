import { useEffect, useState } from "react";
import { BASE_URL, LIMIT } from "../constants";
import axios from "axios";

export const usePosts = ({ skip, debouncedQuery, sortBy }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPosts() {
    setLoading(true);
    let URL = `${BASE_URL}/posts?limit=${LIMIT}&skip=${skip}`;

    if (debouncedQuery) {
      URL = `${BASE_URL}/posts/search?q=${debouncedQuery}&limit=${LIMIT}&skip=${skip}`;
    }

    try {
      let resp = await axios.get(URL);

      let sortedData = [...resp.data.posts];

      if (sortBy === "title") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      }

      if (sortBy === "views") {
        sortedData.sort((a, b) => b.views - a.views);
      }

      setPosts(sortedData);
    } catch (error) {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, [debouncedQuery, sortBy, skip]);

  return { posts, loading };
};
