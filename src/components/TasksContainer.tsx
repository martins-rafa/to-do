import { ClipboardText, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./Task";
import styles from "./TasksContainer.module.css";
import { TasksCounter } from "./TasksCounter";

interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

interface TasksProps {
  tasks: Task[];
}

export function TasksContainer({ tasks }: TasksProps) {
  const [tasksList, setTasksList] = useState(tasks);

  const tasksDoneFilteredArray = tasks.filter((task) => {
    return task.isDone;
  });

  const [newTaskContent, setNewTaskContent] = useState("");
  const [tasksDone, setTasksDone] = useState(tasksDoneFilteredArray.length);

  localStorage.setItem("data", JSON.stringify(tasksList));

  const isNewTaskContentEmpty = newTaskContent.trim().length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Number(new Date()),
      content: newTaskContent.trim(),
      isDone: false,
    };

    setTasksList([...tasksList, newTask]);
    setNewTaskContent("");
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskContent(event.target.value);
  }

  function handleNewTaskInputInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Task is Required");
  }

  function checkboxToggle(taskIdToToggleCheckbox: number) {
    const withTaskDone = tasksList.map((task) => {
      if (task.id === taskIdToToggleCheckbox) {
        task.isDone === true ? (task.isDone = false) : (task.isDone = true);
        return task;
      }
      return task;
    });

    setTasksList(withTaskDone);
    tasksDoneCounter(withTaskDone);
  }

  function deleteTaskById(taskIdToDelete: number) {
    const withoutDeletedTask = tasksList.filter((task) => {
      return task.id !== taskIdToDelete;
    });

    setTasksList(withoutDeletedTask);
    tasksDoneCounter(withoutDeletedTask);
  }

  function tasksDoneCounter(updatedTasksList: Array<Task>) {
    const withTasksDone = updatedTasksList.filter((updatedTask) => {
      return updatedTask.isDone;
    });

    setTasksDone(withTasksDone.length);
  }

  return (
    <div className={styles.Container}>
      {/* Input new task form */}
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task"
          value={newTaskContent}
          onChange={handleNewTaskInputChange}
          onInvalid={handleNewTaskInputInvalid}
          required
        />
        <button
          className={styles.btnSubmit}
          disabled={isNewTaskContentEmpty}
          type="submit"
        >
          Add <PlusCircle size={16} />
        </button>
      </form>

      {/* Tasks created/done counter  */}
      <TasksCounter tasksListLength={tasksList.length} tasksDone={tasksDone} />

      {/* Tasks display */}
      <div className={styles.TasksList}>
        {tasksList.length > 0 ? (
          tasksList.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDeleteTask={deleteTaskById}
                onCheckboxToggle={checkboxToggle}
              />
            );
          })
        ) : (
          <div className={styles.NoTasksCreated}>
            <ClipboardText size={56} weight="light" />
            <h4>You don't have any tasks at the moment</h4>
            <p>Add new tasks and organize your goals</p>
          </div>
        )}
      </div>
    </div>
  );
}
