import { Check, Clock, X } from "lucide-react";
import { motion } from "motion/react";

const Task = ({ text, date, toggleTask, deleteTask, completed, deadline }) => {
  return (
    <div className="flex gap-2 items-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => toggleTask(date)}
        className="cursor-pointer flex items-center flex-shrink-0"
      >
        <Check
          className={`size-6 w-8 hover:text-green-400 transition-all ${
            completed ? "text-green-400" : "text-neutral-200"
          }`}
        />
      </motion.button>
      <div className="w-60 flex-1 text-neutral-200 p-2 border-b-1 break-words flex flex-col">
        <p>{text}</p>
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
        <X className="size-6 text-neutral-200 hover:text-red-300 transition-all" />
      </motion.button>
    </div>
  );
};

export default Task;
