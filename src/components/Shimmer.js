const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill(" ")
        .map((item, index) => (
          <div
            key={index}
            className="shimmer-card p-2 m-4 h-72 w-[220] bg-violet-400/[0.2] border"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
