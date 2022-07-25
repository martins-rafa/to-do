import { Header } from "./components/Header";
import { TasksContainer } from "./components/TasksContainer";

interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

const localStorageData = JSON.parse(localStorage.getItem("data") || "[]");

const tasks: Array<Task> = localStorageData;

export function App() {
  return (
    <>
      <Header />
      <TasksContainer tasks={tasks} />
    </>
  );
}
