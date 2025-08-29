const Tag = ({ name, color, emoji, selected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(name)}
      type="button"
      className={`${
        selected ? "opacity-80" : "opacity-100"
      } transition-all flex items-center text-sm justify-center gap-1 rounded-full w-fit pr-3 pl-2`}
      style={{ backgroundColor: color }}
    >
      <span>{emoji}</span>
      <p>{name}</p>
    </button>
  );
};

export default Tag;
