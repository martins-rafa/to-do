import { Header } from "./components/Header";
import { TasksContainer } from "./components/TasksContainer";

interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

const localStorageData = JSON.parse(localStorage.getItem("@to-do:data-1.0.0") || "[]");

const tasks: Array<Task> = localStorageData;

export function App() {
  return (
    <>
      <Header />
      <TasksContainer tasks={tasks} />
    </>
  );
}
