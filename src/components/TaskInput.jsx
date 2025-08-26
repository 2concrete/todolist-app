import { Plus } from "lucide-react";
import ToolPopout from "./ToolPopout";
import { useState } from "react";
import { motion } from "motion/react";

const TaskInput = ({
  addTask,
  deleteAll,
  editDescription,
  setEditDescription,
}) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (text.trim()) {
      addTask(text, deadline, description);
      setText("");
      setDescription("");
      setDeadline(null);
      setEditDescription(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start gap-2">
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        type="submit"
        className="cursor-pointer"
      >
        <Plus className="dark:text-neutral-200 text-neutral-800 size-8" />
      </motion.button>
      <div className="flex flex-col">
        <input
          onChange={handleTextChange}
          placeholder="enter task..."
          className="bg-transparent rounded-xs text-neutral-800 dark:text-neutral-200 w-60 p-2 outline-none"
          value={text}
        />
        {editDescription && (
          <motion.textarea
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.3 }}
            onChange={handleDescriptionChange}
            onKeyDown={handleKeyDown}
            placeholder="enter descrition..."
            className="bg-transparent rounded-xs text-neutral-800 dark:text-neutral-200 w-60 p-2 outline-none"
            value={description}
          />
        )}
      </div>

      <ToolPopout
        editDescription={editDescription}
        setEditDescription={setEditDescription}
        deadline={deadline}
        setDeadline={setDeadline}
        deleteAll={deleteAll}
      />
    </form>
  );
};

export default TaskInput;
