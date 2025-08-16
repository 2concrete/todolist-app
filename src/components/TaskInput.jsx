import { Plus } from "lucide-react";

const TaskInput = ({ value, setValue, addTask }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.trim()) {
      e.preventDefault();
      addTask(value);
      setValue("");
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <button className="cursor-pointer">
        <Plus className="text-neutral-200 size-8" />
      </button>
      <input
        onChange={handleChange}
        placeholder="enter task..."
        className="bg-neutral-200 rounded-sm w-60 p-2 outline-none"
        value={value}
      ></input>
    </form>
  );
};

export default TaskInput;
