import styles from "./SearchBar.module.css";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      className={styles.input}
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};

export default SearchBar;