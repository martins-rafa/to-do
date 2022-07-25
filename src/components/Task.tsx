import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

interface TaskProps {
  id: number;
  content: string;
  isDone: boolean;
  onDeleteTask: (taskId: number) => void;
  onCheckboxToggle: (taskId: number) => void;
}

export function Task({
  id,
  content,
  isDone,
  onDeleteTask,
  onCheckboxToggle,
}: TaskProps) {
  const [isMarkedAsDone, setIsMarkedAsDone] = useState(isDone);

  function handleCheckboxToggle() {
    setIsMarkedAsDone(!isMarkedAsDone);
    onCheckboxToggle(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.Task}>
      <div className={styles.RoundedCheckbox}>
        <input
          className={styles.Checkbox}
          type="checkbox"
          checked={isMarkedAsDone ? true : false}
          onChange={handleCheckboxToggle}
          name={id.toString()}
          id={id.toString()}
        />
        <label
          htmlFor={id.toString()}
          title={isMarkedAsDone ? "Unmark task as done" : "Mark task as done"}
        ></label>
      </div>

      <p className={isMarkedAsDone ? styles.TaskTextDone : styles.TaskText}>
        {content}
      </p>

      <button
        className={styles.DeleteBtn}
        title="Delete task"
        onClick={handleDeleteTask}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
