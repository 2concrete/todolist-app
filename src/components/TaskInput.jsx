import { Plus } from "lucide-react";
import ToolPopout from "./ToolPopout";
import { useState } from "react";
import { motion } from "motion/react";

const TaskInput = ({ addTask, deleteAll }) => {
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.trim()) {
      e.preventDefault();
      addTask(value, deadline);
      setValue("");
      setDeadline(null);
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        type="submit"
        className="cursor-pointer"
      >
        <Plus className="dark:text-neutral-200 text-neutral-800 size-8" />
      </motion.button>
      <input
        onChange={handleChange}
        placeholder="enter task..."
        className="bg-neutral-200 rounded-xs w-60 p-2 outline-none"
        value={value}
      ></input>
      <ToolPopout
        deadline={deadline}
        setDeadline={setDeadline}
        deleteAll={deleteAll}
      />
    </form>
  );
};

export default TaskInput;
