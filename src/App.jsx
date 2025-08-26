import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { easeInOut, motion } from "motion/react";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : [];
  });

  const [editDescription, setEditDescription] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  const addTask = (text, deadline, description) => {
    const newTask = {
      text: text,
      date: Date.now(),
      completed: false,
      deadline: deadline,
      description: description,
      priority: "medium",
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

  const changePriority = (date) => {
    setTasks(
      tasks.map((task) => {
        if (task.date === date) {
          if (task.priority === "low") {
            return { ...task, priority: "medium" };
          } else if (task.priority === "medium") {
            return { ...task, priority: "high" };
          } else if (task.priority === "high") {
            return { ...task, priority: "low" };
          }
        }
      })
    );
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const deleteTask = (date) => {
    setTasks(tasks.filter((task) => task.date !== date));
  };

  const editTask = (date, text, description) => {
    if (description) {
      setTasks(
        tasks.map((task) =>
          task.date === date
            ? { ...task, text: text, description: description }
            : task
        )
      );
    } else {
      setTasks(
        tasks.map((task) =>
          task.date === date ? { ...task, text: text } : task
        )
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-100 dark:bg-neutral-900">
      <div className="h-1/2">
        <motion.div
          layout="position"
          className="flex flex-col gap-8 w-96"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TaskInput
            addTask={addTask}
            deleteAll={deleteAll}
            editDescription={editDescription}
            setEditDescription={setEditDescription}
          />
          <TaskList
            changePriority={changePriority}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            tasks={tasks}
            editTask={editTask}
          />
        </motion.div>
      </div>
      <ThemeToggle setIsDark={setIsDark} isDark={isDark} />
    </div>
  );
};

export default App;
