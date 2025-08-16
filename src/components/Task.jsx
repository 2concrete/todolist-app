import { Check } from "lucide-react";

const Task = ({ text, date, toggleTask, completed }) => {
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
      <p className="w-full text-neutral-800 p-2 bg-neutral-200 rounded-sm">
        {text}
      </p>
    </div>
  );
};

export default Task;
