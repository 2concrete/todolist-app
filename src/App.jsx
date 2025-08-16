import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const addTask = (text) => {
    const newTask = {
      text: text,
      date: Date.now(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const toggleTask = (date) => {
    setTasks(
      tasks.map((task) =>
        task.date === date ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-15">
        <TaskInput addTask={addTask} setValue={setValue} value={value} />
        <TaskList toggleTask={toggleTask} tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
