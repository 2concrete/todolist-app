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

  const deleteTask = (date) => {
    setTasks(tasks.filter((task) => task.date !== date));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-screen justify-center gap-8">
        <TaskInput addTask={addTask} />
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
