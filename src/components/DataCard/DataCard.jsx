const DataCard = ({ title, body, userId }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{body}</p>
      <span>User: {userId}</span>
    </div>
  );
};

export default DataCard;