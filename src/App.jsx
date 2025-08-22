import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(isDark);
  }, [isDark]);

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

  const editTask = (date, text) => {
    setTasks(
      tasks.map((task) => (task.date === date ? { ...task, text: text } : task))
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200 dark:bg-neutral-900">
      <div className="flex flex-col gap-8 w-96 h-1/2">
        <TaskInput addTask={addTask} deleteAll={deleteAll} />
        <TaskList
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          tasks={tasks}
          editTask={editTask}
        />
        <div className="bg-red-500 dark:bg-blue-500 p-4"></div>
      </div>
      <ThemeToggle setIsDark={setIsDark} isDark={isDark} />
    </div>
  );
};

export default App;
