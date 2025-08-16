import { Check, Trash } from "lucide-react";

const Task = ({ text, date, toggleTask, deleteTask, completed }) => {
  return (
    <div className="flex gap-2 items-center">
      {" "}
      {/* Changed to items-start */}
      <button
        onClick={() => toggleTask(date)}
        className="cursor-pointer flex items-center flex-shrink-0" // Prevent shrinking
      >
        <Check
          className={`size-6 w-8 ${
            completed ? "text-green-400" : "text-neutral-200"
          }`}
        />
      </button>
      <p className="w-60 flex-1 text-neutral-800 p-2 bg-neutral-200 rounded-sm break-words">
        {text}
      </p>
      <button
        onClick={() => deleteTask(date)}
        className="cursor-pointer flex items-center flex-shrink-0" // Prevent shrinking
      >
        <Trash className="size-6 text-red-500" />
      </button>
    </div>
  );
};

export default Task;
