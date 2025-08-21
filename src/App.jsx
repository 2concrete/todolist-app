import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, deadline) => {
    const newTask = {
      text: text,
      date: Date.now(),
      completed: false,
      deadline: deadline,
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

  const deleteAll = () => {
    setTasks([]);
  };

  const deleteTask = (date) => {
    setTasks(tasks.filter((task) => task.date !== date));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-8 w-96 h-1/2">
        <TaskInput addTask={addTask} deleteAll={deleteAll} />
        <TaskList
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default App;
