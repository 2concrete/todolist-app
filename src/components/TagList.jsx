import Tag from "./Tag";

const TagList = ({ tags, onSelect }) => {
  return (
    <div className="flex flex-col gap-2">
      {tags.map((tag, index) => (
        <Tag
          index={index}
          name={tag.name}
          color={tag.color}
          emoji={tag.emoji}
          selected={tag.selected}
          key={index}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default TagList;
