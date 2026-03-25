import styles from "./Sorting.module.css";

const Sorting = ({ sortBy, setSortBy }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="sort">Sort</label>
      <select
        id="sort"
        className={styles.select}
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Default</option>
        <option value="title">Title</option>
        <option value="views">Views</option>
      </select>
    </div>
  );
};

export default Sorting;