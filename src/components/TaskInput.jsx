import { Plus } from "lucide-react";
import { useState } from "react";

const TaskInput = ({ setTasks }) => {
  const [newTask, setNewTask] = useState({ text: "", date: "" });

  const handleChange = (e) => {
    setNewTask();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...setTasks, newTask]);
    setNewTask({ text: "", date: "" });
  };

  return (
    <form className="flex items-center gap-2 relative top-10">
      <button>
        <Plus className="text-neutral-200 size-8" />
      </button>
      <input
        onChange={handleChange}
        placeholder="enter task..."
        className="bg-neutral-200 rounded-sm p-2 outline-none"
        value={newTask}
      ></input>
    </form>
  );
};

export default TaskInput;
