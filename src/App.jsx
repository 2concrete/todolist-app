import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "motion/react";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : [];
  });

  const [tags, setTags] = useState(() => {
    const saved = localStorage.getItem("tags");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);
  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  const [editDescription, setEditDescription] = useState(false);

  const colors = [
    "#1E1E1E",
    "#2C3E50",
    "#8E44AD",
    "#C0392B",
    "#27AE60",
    "#2980B9",
  ];

  const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  };

  const addTask = (text, deadline, description) => {
    const newTask = {
      text: text,
      date: Date.now(),
      completed: false,
      deadline: deadline,
      description: description,
      priority: "medium",
      tags: [...selectedTags], // Use a copy of selectedTags
    };
    setTasks([...tasks, newTask]);
    setSelectedTags([]); // Clear selectedTags after adding the task
    setTags(
      tags.map((tag) =>
        tag.selected === true ? { ...tag, selected: false } : tag
      )
    );
  };

  const addTag = (name, color, emoji) => {
    if ((name, color, emoji)) {
      const newTag = {
        name: name,
        color: color ? color : getRandom(colors),
        emoji: emoji,
        selected: false,
      };
      setTags([...tags, newTag]);
    }
  };

  const onSelect = (name) => {
    const updatedTags = tags.map((tag) =>
      tag.name === name ? { ...tag, selected: !tag.selected } : tag
    );
    setTags(updatedTags); // Update the global tags state
    setSelectedTags(
      updatedTags.filter((tag) => tag.selected) // Update selectedTags independently
    );
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(isDark);
  }, [isDark]);

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
        return task;
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
            addTag={addTag}
            addTask={addTask}
            tags={tags}
            onSelect={onSelect}
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
