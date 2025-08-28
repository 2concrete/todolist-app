import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Tag
          index={index}
          name={tag.name}
          color={tag.color}
          emoji={tag.emoji}
          key={index}
        />
      ))}
    </div>
  );
};

export default TagList;
