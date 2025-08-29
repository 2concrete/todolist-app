import { Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import TagCreator from "./TagCreator";
import TagList from "./TagList";

const TagButton = ({ addTag, tags, onSelect }) => {
  const [showPopout, setShowPopout] = useState(false);
  return (
    <div className="text-neutral-800 dark:text-neutral-200 flex flex-col gap-2">
      <motion.button
        type="button"
        className="flex items-center"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPopout(!showPopout)}
      >
        <Tag />
      </motion.button>
      {showPopout && (
        <div className="flex flex-col gap-2">
          <TagCreator addTag={addTag} />
          <TagList tags={tags} onSelect={onSelect} />
        </div>
      )}
    </div>
  );
};

export default TagButton;
