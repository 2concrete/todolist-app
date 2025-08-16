import { useState } from "react";
import TaskInput from "./components/TaskInput";

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="flex flex-col items-center">
      <TaskInput setTasks={setTasks} tasks={tasks} />
    </div>
  );
};

export default App;
