import { useState } from "react";
import styles from "./Dashboard.module.css";
import { usePosts } from "../../hooks/usePosts";
import Loader from "../../components/Loader/Loader";
import { useDebounce } from "../../hooks/useDebounce";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sorting from "../../components/Sorting/Sorting";
import PostTable from "../../components/PostTable/PostTable";
import Pagination from "../../components/Pagination/Pagination";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [skip, setSkip] = useState(0);

  const debouncedQuery = useDebounce(query, 1000);

  let { posts, loading } = usePosts({ debouncedQuery, sortBy, skip });

  return (
    <article className={styles.container}>
      <h1 className={styles.heading}>My Dashboard</h1>

      <section className={styles.controls}>
        <SearchBar query={query} setQuery={setQuery} />
        <Sorting sortBy={sortBy} setSortBy={setSortBy} />
      </section>

      <div className={styles.card}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <PostTable posts={posts} />
            <Pagination skip={skip} setSkip={setSkip} />
          </>
        )}
      </div>
    </article>
  );
};

export default Dashboard;
