import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const TagCreator = ({ addTag }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showPopout, setShowPopout] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmojiChange = (e) => {
    setEmoji(e.target.value);
  };

  const handleSubmit = () => {
    addTag(name, color, emoji);
    setName("");
    setColor("");
    setEmoji("");
    setShowPopout(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="flex flex-col gap-2 mb-3"
      >
        <div className="flex gap-1 text-nowrap">
          <motion.button className="flex gap-1">create new</motion.button>
          {showPopout ? (
            <div className="flex">
              <button type="button" onClick={() => setShowPopout(!showPopout)}>
                <ChevronUp />
              </button>
              <button type="button" onClick={() => handleSubmit()}>
                <Plus />
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setShowPopout(!showPopout)}>
              <ChevronDown />
            </button>
          )}
        </div>

        {showPopout && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex gap-2 flex-col"
          >
            <input
              className="outline-none bg-transparent"
              placeholder="name..."
              value={name}
              onChange={handleNameChange}
            />
            <input
              className="outline-none bg-transparent"
              placeholder="emoji..."
              value={emoji}
              onChange={handleEmojiChange}
            />
            <HexColorPicker
              color={color}
              onChange={setColor}
              className="mb-4"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TagCreator;
