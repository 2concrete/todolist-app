import { AnimatePresence, motion } from "motion/react";
import Task from "./Task";

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
  changePriority,
}) => {
  return (
    <div className="flex flex-col-reverse gap-2 absolute top-16">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            layout="position"
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            <Task
              changePriority={changePriority}
              key={index}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTask={editTask}
              completed={task.completed}
              priority={task.priority}
              text={task.text}
              date={task.date}
              description={task.description}
              deadline={task.deadline}
              tags={task.tags} // Use task-specific tags
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
