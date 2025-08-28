const Tag = ({ name, color, emoji }) => {
  return (
    <button
      className="flex items-center justify-center gap-1 rounded-full w-fit px-2"
      style={{ backgroundColor: color }}
    >
      <span>{emoji}</span>
      <p>{name}</p>
    </button>
  );
};

export default Tag;
