import ProgressTracker from "./components/ProgressTracker";
import Taskform from "./components/Taskform";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <>
      <h1>Task Remainder</h1>
      <p>our task remainder</p>
      <ProgressTracker/>
      <Taskform/>
      <TaskList/>
      <button>Clear all tasks</button>
    </>
  )
}