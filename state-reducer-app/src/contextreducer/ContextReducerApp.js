import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksProvider } from "./TasksContext.js";

function ContextReducerApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default ContextReducerApp;
