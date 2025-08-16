import { Check, Trash } from "lucide-react";

const Task = ({ text, date, toggleTask, deleteTask, completed }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => toggleTask(date)}
        className="cursor-pointer flex items-center"
      >
        <Check
          className={`size-6 w-8 ${
            completed ? "text-green-400" : "text-neutral-200"
          }`}
        />
      </button>
      <p className="w-full relative flex text-neutral-800 p-2 bg-neutral-200 rounded-sm">
        {text}
        <button
          onClick={() => deleteTask(date)}
          className="cursor-pointer flex items-center absolute right-1"
        >
          <Trash className={`size-6 w-8 text-red-500`} />
        </button>
      </p>
    </div>
  );
};

export default Task;
