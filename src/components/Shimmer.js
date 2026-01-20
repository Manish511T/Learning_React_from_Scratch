const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line title"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line small"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
