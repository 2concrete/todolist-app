import { AnimatePresence, motion } from "motion/react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <div className="flex flex-col-reverse gap-2">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            <Task
              key={index}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTask={editTask}
              completed={task.completed}
              text={task.text}
              date={task.date}
              deadline={task.deadline}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
