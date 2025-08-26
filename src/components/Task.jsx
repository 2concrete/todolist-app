import { Check, Clock, X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef } from "react";

const Task = ({
  text,
  date,
  description,
  toggleTask,
  deleteTask,
  completed,
  deadline,
  editTask,
}) => {
  const [newText, setNewText] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const inputRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Call editTask with the updated text and description
    editTask(date, newText || text, newDescription || description);

    // Blur the appropriate input field
    if (document.activeElement === inputRef.current) {
      inputRef.current.blur();
    } else if (document.activeElement === descriptionRef.current) {
      descriptionRef.current.blur();
    }

    // Clear the local states
    setNewText("");
    setNewDescription("");
  };

  return (
    <div className="flex gap-2 items-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => toggleTask(date)}
        className="cursor-pointer flex items-center flex-shrink-0"
      >
        <Check
          className={`size-6 w-8 transition-all ${
            completed
              ? "text-green-400"
              : "text-neutral-800 dark:text-neutral-200"
          }`}
        />
      </motion.button>
      <div className="flex-1 p-2 border-b-1 border-neutral-800 dark:border-neutral-200 break-words flex flex-col">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleTextChange}
            placeholder={text}
            value={newText}
            ref={inputRef}
            className="w-full outline-none bg-transparent text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-800 dark:placeholder:text-neutral-200 focus:placeholder:opacity-0"
          />
          {description && (
            <textarea
              onChange={handleDescriptionChange}
              placeholder={description}
              value={newDescription}
              ref={descriptionRef}
              onKeyDown={handleKeyDown}
              rows={1}
              className="text-sm w-full outline-none bg-transparent text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-800 dark:placeholder:text-neutral-200 focus:placeholder:opacity-0 resize-y"
            />
          )}
        </form>
        {deadline && (
          <p className="gap-1 items-center flex text-xs">
            <Clock className="size-3" />
            {deadline}
          </p>
        )}
      </div>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => deleteTask(date)}
        className="cursor-pointer flex items-center flex-shrink-0"
      >
        <X className="size-6 text-neutral-800 dark:text-neutral-200 hover:text-red-300 transition-all" />
      </motion.button>
    </div>
  );
};

export default Task;
