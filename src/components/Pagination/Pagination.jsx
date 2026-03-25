import styles from "./Pagination.module.css";
const Pagination = ({ skip, setSkip }) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => setSkip((prev) => Math.max(0, prev - 10))}
        disabled={skip === 0 && true}
      >
        prev
      </button>

      <button
        className={styles.button}
        onClick={() => setSkip((prev) => prev + 10)}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
