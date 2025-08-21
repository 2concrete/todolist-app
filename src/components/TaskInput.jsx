import { Plus } from "lucide-react";
import ToolPopout from "./ToolPopout";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
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
      <button type="submit" className="cursor-pointer">
        <Plus className="text-neutral-200 size-8" />
      </button>
      <input
        onChange={handleChange}
        placeholder="enter task..."
        className="bg-neutral-200 rounded-xs w-60 p-2 outline-none"
        value={value}
      ></input>
      <ToolPopout deadline={deadline} setDeadline={setDeadline} />
    </form>
  );
};

export default TaskInput;
