import Task from "./Task";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="flex flex-col-reverse gap-2">
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            completed={task.completed}
            text={task.text}
            date={task.date}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
