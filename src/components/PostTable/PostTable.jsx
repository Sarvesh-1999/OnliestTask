import styles from "./PostTable.module.css";

const PostTable = ({ posts }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>VIEWS</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;